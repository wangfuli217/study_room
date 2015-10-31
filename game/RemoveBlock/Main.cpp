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

// user can vary the variables from here
const float horizontalBlockCount = 20;
const float horizontalBlockSize = 70;
const float verticalBlockCount = 6;
const float verticalBlockSize = 40;
const float ballInitSpeed = 600;
const int ballRadius = 10;
const sf::Vector2f apadSize = {140, 20};
// to here

const float plateWidth = horizontalBlockCount * horizontalBlockSize;
const float plateHeight = verticalBlockCount * verticalBlockSize + 700;
const float pi = 3.141592;

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

    // init pause message
    initMsg(pauseMsg, font);

    // play with voice ^^
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

        // move objects and check collision
        if(isPlaying)
        {
            // move ball's position
            ball.moveBody();

            // create(shoot) new bullet and move bullets' positions
            apad.shootBullet();
            apad.moveBullets();

            // collision checking between objects
            if( collisionAttackPaddle(ball, apad) )       soundCol.play();
            if( collisionScreen(ball) )                   soundCol.play();
            if( collisionBlock(ball, plate.getBlocks()) ) soundCol.play();
            collisionScreenBullets(apad.getBullets());
            shutBlock(apad.getBullets(), plate.getBlocks());

            // all the blocks shut down
            if(plate.getBlocks().size() == 0)
            {
                isPlaying = false;
                pauseMsg.setString("You win!\nPress return to restart orescape to exit");
            }

            // ball fell into the bottom of the game plate
            if( isDie(ball) )
            {
                isPlaying = false;
                pauseMsg.setString("You lost!\nPress return to restart orescape to exit");
            }
        }
        else
        {
            // If a game hasn't started yet,
            // the ball moves attached to the attack paddle.
            ball.movePos(apad.TopMiddle());
        }

        // clear window
        w.clear(sf::Color(69,69,69));

        // draw objects into window
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

        // display window including drawn objects
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
    float ballLeftX   = ball.Left().x;
    float ballRightX  = ball.Right().x;
    float ballCenterX = ball.Center().x;
    float ballCenterY = ball.Center().y;

    float blockTopY    = block.TopY();
    float blockBottomY = block.BottomY();
    float blockLeftX   = block.LeftX();
    float blockRightX  = block.RightX();

    // collision between ball and block-top/bottom
    if( (ballTopY <= blockBottomY)
        && ((ballCenterX >= blockLeftX) && (ballCenterX <= blockRightX)))
    {
        if(ball.getAngle() > 0 && ball.getAngle() < pi)
        {
            ball.setAngle(2*pi-ball.getAngle());
            return true;
        }
    }

    if( (ballLeftX <= blockRightX)
        && ((ballCenterY >= blockBottomY) && (ballCenterY <= blockTopY)) )
    {
        if(ball.getAngle() > pi)
        {
            // lower direction
            ball.setAngle(3*pi-(ball.getAngle()));
            return true;
        }

        if(ball.getAngle() < pi)
        {
            // upper direction
            ball.setAngle(pi-ball.getAngle());
            return true;
        }
    }

    // collision between ball-right and block-left
    if( (ballRightX >= blockLeftX)
        && ((ballCenterY >= blockBottomY) && (ballCenterY <= blockTopY)) )
    {
        if(ball.getAngle() < pi/2)
        {
            // upper direction
            ball.setAngle(pi-ball.getAngle());
            return true;
        }

        if(ball.getAngle() > (3/2)*pi)
        {
            // lower direction
            ball.setAngle(3*pi-(ball.getAngle()));
            return true;
        }
        return true;
    }

    // TODO collision between ball-bottom and block-top
    /*
    if( (ballBottomY >= blockTopY)
        && ((ballCenterX >= blockLeftX) && (ballCenterX <= blockRightX)) )
    {
        std::cout << "fffffffffffffffffff" << std::endl;
        ball.setAngle(-ball.getAngle());
        return true;
    }
    */
    
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

    // right screen
    if( (ballCenterX+radius) >= plateWidth )
    {
        std::cout << "Right-Screen collides..." << std::endl;
        if(ball.getAngle() < pi/2)
        {
            // upper direction
            ball.setAngle(pi-ball.getAngle());
        }
        else
        {
            // lower direction
            ball.setAngle(3*pi-(ball.getAngle()));
        }
        return true;
    }

    // left screen
    if( (ballCenterX-radius) <= 0 )
    {
        std::cout << "Left-Screen collides..." << std::endl;
        if(ball.getAngle() > pi)
        {
            // lower direction
            ball.setAngle(3*pi-(ball.getAngle()));
        }
        else
        {
            // upper direction
            ball.setAngle(pi-ball.getAngle());
        }
        return true;
    }

    // upper screen
    if( ballCenterY <= 0 )
    {
        std::cout << "Screen collides..." << std::endl;
        ball.setAngle(2*pi-ball.getAngle());
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

    if(ballBottomY >= padTopY)
    {
        // If the ball hits in the left/right 1/3 side of the pad, it gets faster.
        if( ((ballCenterX >= padLeftX) && (ballCenterX < (padLeftX + apadSize.x/3)))
            || ((ballCenterX > (padRightX - apadSize.x/3)) && (ballCenterX <= padRightX)) )
        {
            std::cout << "Attack paddle side collides..." << std::endl;
            ball.setAngle(2*pi-ball.getAngle());
            ball.setSpeed(ball.getSpeed()*1.01);
            return true;
        }

        // If the ball hit in the middle, it gets slower.
        if( (ballCenterX >= (padLeftX + apadSize.x/3)) && (ballCenterX <= (padRightX - apadSize.x/3)) )
        {
            std::cout << "Attack paddle center collides..." << std::endl;
            ball.setAngle(2*pi-ball.getAngle());
            ball.setSpeed(ball.getSpeed()*0.99);
            return true;
        }
    }

    return false;
}

bool isDie(const Ball& ball)
{
    int ballBottomY = ball.Bottom().y;

    if(ballBottomY >= plateHeight)
    {
        std::cout << "Die... (" << ballBottomY << "," << plateHeight << ")" << std::endl;
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
