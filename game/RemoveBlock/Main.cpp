#include <GamePlate.h>
#include <AttackPaddle.h>
#include <Ball.h>
#include <SFML/Audio.hpp>
#include <map>
#include <iostream>

bool isBlockCollides(Ball& ball, const Block& pad);
bool collisionBlock(Ball& ball, std::map<int,std::shared_ptr<Block>>& paddles);
bool collisionScreen(Ball& ball);
bool collisionAttackPaddle(Ball& ball, const AttackPaddle& pad);
bool isDie(const Ball& ball);
void initMsg(sf::Text& m, sf::Font& f);
void collisionScreenBullets(std::map<int,std::shared_ptr<Bullet>>& bullets);
void shutBlock(std::map<int,std::shared_ptr<Bullet>>& bullets, std::map<int,std::shared_ptr<Block>>& blocks);

const float horizontalBlockCount = 30;
const float horizontalBlockSize = 50;
const float verticalBlockCount = 8;
const float verticalBlockSize = 40;
const float plateWidth = horizontalBlockCount * horizontalBlockSize;
const float plateHeight = verticalBlockCount * verticalBlockSize + 700;
const int ballRadius = 10;
const sf::Vector2f apadSize = {140, 20};

int main()
{
    sf::Text pauseMsg;
    sf::Font font;
    sf::SoundBuffer ballSoundBuf1;
    sf::SoundBuffer ballSoundBuf2;
    int isPlaying = 0;

    // create game paddle and colorful target paddles
    GamePlate plate(plateWidth, plateHeight);
    plate.newGame();

    // create attack paddle
    AttackPaddle apad(apadSize);

    // create ball (start above the attack paddle)
    Ball ball(ballRadius);

    initMsg(pauseMsg, font);

    // 그냥 목소리로 장난치기 ㅋㅋ
    ballSoundBuf1.loadFromFile("resources/ball.wav");
    sf::Sound soundCol(ballSoundBuf1);

    ballSoundBuf2.loadFromFile("resources/die.wav");
    sf::Sound soundDie(ballSoundBuf2);

    sf::RenderWindow w(sf::VideoMode(plate.getWidth(), plate.getHeight(), 32),
                       "Block Removal Game",
                       sf::Style::Titlebar | sf::Style::Close);
    w.setVerticalSyncEnabled(true);

    while(w.isOpen())
    {
        // check event
        sf::Event event;
        while(w.pollEvent(event))
        {
            if(event.type == sf::Event::Closed ||
               sf::Keyboard::isKeyPressed(sf::Keyboard::Key::Escape))
            {
                w.close();
                break;
            }

            if(sf::Keyboard::isKeyPressed(sf::Keyboard::Key::Return))
            {
                if(!isPlaying)
                {
                    isPlaying = true;
                    apad.clearBullets();
                    ball.reset();

                    if(plate.getBlocks().size() == 0)
                    {
                        plate.newGame();
                    }
                }
            }
        }

        // apad can always move
        apad.moveBody();

        if(isPlaying)
        {
            ball.moveBody();

            apad.shootBullet();
            apad.moveBullets();

            if( collisionAttackPaddle(ball, apad) )       soundCol.play();
            if( collisionScreen(ball) )                   soundCol.play();
            if( collisionBlock(ball, plate.getBlocks()) ) soundCol.play();

            collisionScreenBullets(apad.getBullets());
            shutBlock(apad.getBullets(), plate.getBlocks());

            if(plate.getBlocks().size() == 0)
            {
                isPlaying = false;
                pauseMsg.setString("You win!\nPress return to restart orescape to exit");
            }

            if( isDie(ball) )
            {
                isPlaying = false;
                pauseMsg.setString("You lost!\nPress return to restart orescape to exit");
            }
        }

        // If a game hasn't started yet,
        // the ball moves attached to the attack paddle.
        if(!isPlaying)
        {
            ball.movePos(apad.TopMiddle());
        }

        // draw & display window
        w.clear(sf::Color(69,69,69));

        plate.drawBlocks(w);
        apad.drawBody(w);
        ball.drawBody(w);

        if(!isPlaying)
        {
            w.draw(pauseMsg);
        }
        else
        {
            apad.drawBullets(w);
        }

        w.display();
    }

    return 0;
}

void initMsg(sf::Text& m, sf::Font& f)
{
    f.loadFromFile("resources/sansation.ttf");
    m.setFont(f);
    m.setCharacterSize(40);
    m.setPosition(400.f, plateHeight/2);
    m.setColor(sf::Color::White);
}

bool isBlockCollides(Ball& ball, const Block& block)
{
    float ballTopY    = ball.Top().y;
    float ballBottomY = ball.Bottom().y;
    float ballLeftX   = ball.Left().x;
    float ballRightX  = ball.Right().x;

    float blockTopY    = block.TopY();
    float blockBottomY = block.BottomY();
    float blockLeftX   = block.LeftX();
    float blockRightX  = block.RightX();

#if 0
    // collision between ball-top and block-bottom
    if( (ballTopY <= blockBottomY)
     && (ballLeftX > blockLeftX) && (ballRightX < blockRightX) )
    {
        ball.setVelocity(ball.getVelocity().x, ball.getVelocity().y*(-1));
        return true;
    }

    // collision between ball-left and block-right
    if( (ballLeftX <= blockRightX)
     && (ballBottomY > blockBottomY) && (ballTopY < blockTopY) )
    {
        ball.setVelocity(ball.getVelocity().x*(-1), ball.getVelocity().y);
        return true;
    }

    // collision between ball-right and block-left
    if( (ballRightX >= blockLeftX)
     && (ballBottomY > blockBottomY) && (ballTopY < blockTopY) )
    {
        ball.setVelocity(ball.getVelocity().x*(-1), ball.getVelocity().y);
        return true;
    }

    // collision between ball-bottom and block-top
    if( (ballBottomY >= blockTopY)
     && (ballLeftX > blockLeftX) && (ballRightX < blockRightX) )
    {
        ball.setVelocity(ball.getVelocity().x, ball.getVelocity().y*(-1));
        return true;
    }
#endif

#if 1
    // collision between ball-top and block-bottom
    if( (ballTopY <= blockBottomY)
     && (ballTopY > blockBottomY - ball.speedY())
     && (ballLeftX >= blockLeftX)
     && (ballRightX <= blockRightX) )
    {
        ball.setVelocity(ball.getVelocity().x, ball.getVelocity().y*(-1));
        return true;
    }

    // collision between ball-left and block-right
    if( (ballLeftX <= blockRightX)
     && (ballLeftX > blockRightX - ball.speedX())
     && (ballBottomY >= blockBottomY)
     && (ballTopY <= blockTopY) )
    {
        ball.setVelocity(ball.getVelocity().x*(-1), ball.getVelocity().y);
        return true;
    }

    // collision between ball-right and block-left
    if( (ballRightX >= blockLeftX)
     && (ballRightX < blockLeftX + ball.speedX())
     && (ballBottomY >= blockBottomY)
     && (ballTopY <= blockTopY) )
    {
        ball.setVelocity(ball.getVelocity().x*(-1), ball.getVelocity().y);
        return true;
    }

    // collision between ball-bottom and block-top
    if( (ballBottomY >= blockTopY)
     && (ballBottomY < blockTopY + ball.speedY())
     && (ballLeftX >= blockLeftX)
     && (ballRightX <= blockRightX) )
    {
        ball.setVelocity(ball.getVelocity().x, ball.getVelocity().y*(-1));
        return true;
    }
#endif
    
    return false;
}

bool collisionBlock(Ball& ball, std::map<int,std::shared_ptr<Block>>& blocks)
{
    for(auto b : blocks)
    {
        if( isBlockCollides(ball, *b.second) )
        {
            blocks.erase(b.first);
            return true;
        }
    }

    return false;
}

bool collisionScreen(Ball& ball)
{
    int ballCenterX = ball.Center().x;
    int ballCenterY = ball.Center().y;
    int radius = ball.getBody().getRadius();

    // left,right screen
    if( (ballCenterX-radius) <= 0 || (ballCenterX+radius) >= plateWidth )
    {
        std::cout << "Screen collides..." << std::endl;
        ball.setVelocity(ball.getVelocity().x*(-1), ball.getVelocity().y);
        return true;
    }

    // upper screen
    if( ballCenterY <= 0 )
    {
        std::cout << "Screen collides..." << std::endl;
        ball.setVelocity(ball.getVelocity().x, ball.getVelocity().y*(-1));
        return true;
    }

    return false;
}

bool collisionAttackPaddle(Ball& ball, const AttackPaddle& pad)
{
    int ballCenterX  = ball.Center().x;
    int ballBottomY  = ball.Bottom().y;
    int padTopY   = pad.TopY();
    int padLeftX  = pad.LeftX();
    int padRightX = pad.RightX();

    if( (ballBottomY >= padTopY) && (ballBottomY < (padTopY + ball.speedY())) )
    {
        // If the ball hits in the left/right 1/3 side of the pad,
        // it gets faster in the x/y direction (bit more in the x direction).
        if( ((ballCenterX >= padLeftX) && (ballCenterX < (padLeftX + apadSize.x/3)))
        ||  ((ballCenterX > (padRightX - apadSize.x/3)) && (ballCenterX <= padRightX)) )
        {
            std::cout << "Attack paddle left-size collides." << std::endl;
            ball.setVelocity(ball.getVelocity().x*(1.1), ball.getVelocity().y*(-1.05));
            return true;
        }

        // If the ball hit in the middle, nothing happens. Just change the direction.
        if( (ballCenterX >= (padLeftX + apadSize.x/3)) && (ballCenterX <= (padRightX - apadSize.x/3)) )
        {
            std::cout << "Attack paddle collides..." << std::endl;
            ball.setVelocity(ball.getVelocity().x, ball.getVelocity().y*(-1));
            return true;
        }
    }

    return false;
}

bool isDie(const Ball& ball)
{
    int ballTopY = ball.Top().y;

    if(ballTopY >= plateHeight)
    {
        std::cout << "Die... (" << ballTopY << "," << plateHeight << ")" << std::endl;
        return true;
    }

    return false;
}

void collisionScreenBullets(std::map<int,std::shared_ptr<Bullet>>& bullets)
{
    for(auto i : bullets)
    {
        if( (i.second)->TopY() <= 0 )
        {
            bullets.erase(i.first);
            break;
        }
    }
}

void shutBlock(std::map<int,std::shared_ptr<Bullet>>& bullets, std::map<int,std::shared_ptr<Block>>& blocks)
{
    for(auto i : bullets)
    {
        for(auto j : blocks)
        {
            int bulletTopY   = (i.second)->TopY();
            int bulletCenter = (i.second)->Center().x;
            int blockBottomY = (j.second)->BottomY();
            int blockLeftX   = (j.second)->BottomLeft().x;
            int blockRightX  = (j.second)->BottomRight().x;

            // 총알과 블럭이 충돌하여 총알과 블록 삭제
            if( (bulletTopY <= blockBottomY)
             && (bulletCenter > blockLeftX && bulletCenter < blockRightX) )
            {
                std::cout << "shut block (" << i.first << "," << j.first << ")"
                          << " count(" << bullets.size() << ", " << blocks.size() << ")" << std::endl;

                bullets.erase(i.first);
                blocks.erase(j.first);
                return;
            }
        }
    }
}
