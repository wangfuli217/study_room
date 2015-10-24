#include <GamePlate.h>
#include <AttackPaddle.h>
#include <Ball.h>
#include <iostream>

bool isBlockCollides(const Ball& ball, const Block& pad);
void collisionBlock(Ball& ball, std::map<int,Block*>& paddles);
void collisionScreen(Ball& ball);
void collisionAttackPaddle(Ball& ball, const AttackPaddle& pad);
bool isDie(const Ball& ball);

const float plateWidth = 1400.f;
const float plateHeight = 1000.f;
const int ballRadius = 10;
const sf::Vector2f apadSize = {160, 20};

int main()
{
    int isPlaying = 0;

    // create game paddle and colorful target paddles
    GamePlate plate(plateWidth, plateHeight);
    plate.newGame();

    // create attack paddle
    AttackPaddle apad(apadSize);

    // create ball (start above the attack paddle)
    Ball ball(ballRadius);

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

            if(sf::Keyboard::isKeyPressed(sf::Keyboard::Key::Space))
            {
                if(!isPlaying)
                {
                    isPlaying = true;

                    // reset init position of ball and apad
                    //ball.reset();
                    //apad.reset();
                }
            }
        }

        // apad can always move
        apad.move();

        if(isPlaying)
        {
            // move ball and attack paddle
            ball.move();

            // check collision between ball and screen/paddle/blocks
            collisionBlock(ball, plate.getBlocks());
            collisionScreen(ball);
            collisionAttackPaddle(ball, apad);

            if( isDie(ball) )
            {
                isPlaying = false;
                plate.pause("You lost! Do you want continue..?");
            }
        }

        // If a game hasn't started yet,
        // the ball moves with the attack paddle.
        if(!isPlaying)
        {
            ball.moveto(apad.TopMiddle());
        }

        // display window
        w.clear(sf::Color(69,69,69));

        plate.drawBlocks(w);
        apad.draw(w);
        ball.draw(w);

        w.display();
    }

    return 0;
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

void collisionBlock(Ball& ball, std::map<int,Block*>& blocks)
{
    for(auto b : blocks)
    {
        if( isBlockCollides(ball, *b.second) )
        {
            ball.setVelocity(ball.getVelocity().x, ball.getVelocity().y*(-1));
            // TODO 아래, 양옆에 충돌하는 것이 다르게 velocity 를 설정해야 함. 

            blocks.erase(b.first);

            break;
        }
    }
}

void collisionScreen(Ball& ball)
{
    int ballCenterX = ball.Center().x;
    int ballCenterY = ball.Center().y;
    int radius = ball.getBody().getRadius();

    // left,right screen
    if( (ballCenterX-radius) <= 0 || (ballCenterX+radius) >= plateWidth )
    {
        std::cout << "Screen collides..." << std::endl;
        ball.setVelocity(ball.getVelocity().x*(-1), ball.getVelocity().y);
    }

    // upper screen
    if( ballCenterY <= 0 )
    {
        std::cout << "Screen collides..." << std::endl;
        ball.setVelocity(ball.getVelocity().x, ball.getVelocity().y*(-1));
    }
}

void collisionAttackPaddle(Ball& ball, const AttackPaddle& pad)
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
        }

        // If the ball hit in the middle, nothing happens.
        if( (ballCenterX >= (padLeftX + apadSize.x/3)) && (ballCenterX <= (padRightX - apadSize.x/3)) )
        {
            std::cout << "Attack paddle collides..." << std::endl;
            ball.setVelocity(ball.getVelocity().x, ball.getVelocity().y*(-1));
        }
    }
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
