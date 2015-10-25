#include <GamePlate.h>
#include <AttackPaddle.h>
#include <Ball.h>
#include <SFML/Audio.hpp>
#include <map>
#include <iostream>

bool isBlockCollides(const Ball& ball, const Block& pad);
bool collisionBlock(Ball& ball, std::map<int,std::shared_ptr<Block>>& paddles);
bool collisionScreen(Ball& ball);
bool collisionAttackPaddle(Ball& ball, const AttackPaddle& pad);
bool isDie(const Ball& ball);
void initMsg(sf::Text& m, sf::Font& f);
void collisionScreenBullets(std::map<int,std::shared_ptr<Bullet>>& bullets);
void shutBlock(std::map<int,std::shared_ptr<Bullet>>& bullets, std::map<int,std::shared_ptr<Block>>& blocks);

const float plateWidth = 1400.f;
const float plateHeight = 1000.f;
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
                }
            }
        }

        // apad can always move
        apad.moveBody();

        if(isPlaying)
        {
            apad.shootBullet();
            apad.moveBullets();

            if( collisionAttackPaddle(ball, apad) )       soundCol.play();
            if( collisionBlock(ball, plate.getBlocks()) ) soundCol.play();
            if( collisionScreen(ball) )                   soundCol.play();

            if( isDie(ball) )
            {
                isPlaying = false;

                soundDie.play();

                pauseMsg.setString("You lost!\nPress return to restart orescape to exit");
            }

            ball.moveBody();
        }

        // If a game hasn't started yet,
        // the ball moves with the attack paddle.
        if(!isPlaying)
        {
            ball.movePos(apad.TopMiddle());
        }

        // display window
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
            collisionScreenBullets(apad.getBullets());
            shutBlock(apad.getBullets(), plate.getBlocks());
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

bool isBlockCollides(const Ball& ball, const Block& block)
{
    float ballX = ball.Top().x;
    float ballY = ball.Top().y;
    float blockLeftX = block.LeftX();
    float blockRightX = block.RightX();
    float blockBottom = block.BottomY();

    if( (ballY <= blockBottom) && (ballY > (blockBottom - ball.speedY())) )
    {
        if( ballX >= blockLeftX && ballX <= blockRightX )
        {
            std::cout << "collision target block..."
                      << "(" << ballX << "," << ballY << ")"
                      << "(" << blockLeftX << "," << blockRightX << "," << blockBottom << ")"
                      << std::endl;
            return true;
        }
    }
    return false;
}

bool collisionBlock(Ball& ball, std::map<int,std::shared_ptr<Block>>& blocks)
{
    for(auto b : blocks)
    {
        if( isBlockCollides(ball, *b.second) )
        {
            ball.setVelocity(ball.getVelocity().x, ball.getVelocity().y*(-1));
            // TODO 아래, 양옆에 충돌하는 것이 다르게 velocity 를 설정해야 함. 

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

        // If the ball hit in the middle, nothing happens.
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
            if( bulletTopY <= blockBottomY
            &&  ( bulletCenter > blockLeftX && bulletCenter < blockRightX ) )
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
