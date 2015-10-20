#include <GamePlate.h>
#include <AttackPaddle.h>
#include <Ball.h>
#include <iostream>

bool isTargetCollides(const sf::CircleShape& ball, const sf::RectangleShape& pad);
void collisionTarget(Ball& ball, std::map<int,TargetPaddle*>& paddles);
void collisionScreen(Ball& ball);
void collisionAttackPaddle(Ball& ball, const AttackPaddle& pad);

float plateWidth = 1400.f;
float plateHeight = 1000.f;
int ballRadius = 10;
sf::Vector2f apadSize = {160, 20};

int main()
{
    int isPlaying = 0;

    // create game paddle and colorful target paddles
    GamePlate plate(plateWidth, plateHeight);
    plate.newGame();

    // create attack paddle
    AttackPaddle apad(apadSize, {plateWidth/2, plateHeight});

    // create ball (start above the attack paddle)
    sf::Vector2f ballPos(plateWidth/2, plateHeight-40);
    Ball ball(ballRadius, ballPos);

    sf::RenderWindow w(sf::VideoMode(plate.getWidth(), plate.getHeight(), 32),
                       "Block Removal Game",
                       sf::Style::Titlebar | sf::Style::Close);
    w.setVerticalSyncEnabled(true);

    while(w.isOpen())
    {
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
                isPlaying = 1;
                ball.start();
            }
        }

        w.clear(sf::Color(69,69,69));
        plate.drawTargetPads(w);

        if(isPlaying)
        {
            collisionTarget(ball, plate.getTargetPaddles());
            collisionScreen(ball);
            collisionAttackPaddle(ball, apad);
        }

        apad.draw(w);
        ball.draw(w);

        w.display();
    }

    return 0;
}

/*
 * Ball can remove block(target paddle)
 * only when it collides the bottom of the blocks.
 * If it collides the both sides of the blocks,
 * it bounces just like on the other walls.
 */
bool isTargetCollides(const sf::CircleShape& ball, const sf::RectangleShape& pad)
{
    int ballX = ball.getPosition().x;
    int ballY = ball.getPosition().y - ball.getRadius();
    int padLeftX = pad.getPosition().x;
    int padRightX = pad.getPosition().x + pad.getSize().x;
    int padBottom = pad.getPosition().y + pad.getSize().y;

    if( (ballY <= padBottom) && (ballY > (padBottom - pad.getSize().y/2)) )
    {
        if( ballX >= padLeftX && ballX <= padRightX )
        {
            std::cout << "collision target paddle..."
                      << "(" << ballX << "," << ballY << ")"
                      << "(" << padLeftX << "," << padRightX << "," << padBottom << ")"
                      << std::endl;
            return true;
        }
    }
    return false;
}

void collisionTarget(Ball& ball, std::map<int,TargetPaddle*>& paddles)
{
    for(auto pad : paddles)
    {
        if( isTargetCollides(ball.getBody(), pad.second->getBody()) )
        {
            ball.setVelocity(ball.getVelocity().x, ball.getVelocity().y*(-1));
            // TODO 아래, 양옆에 충돌하는 것이 다르게 velocity 를 설정해야 함. 

            paddles.erase(pad.first);

            break;
        }
    }
}

void collisionScreen(Ball& ball)
{
    int ballX = ball.getBody().getPosition().x;
    int ballY = ball.getBody().getPosition().y - ball.getBody().getRadius();
    int radius = ball.getBody().getRadius();

    // left,right screen
    if( (ballX-radius) <= 0 || (ballX+radius) >= plateWidth )
    {
        std::cout << "Screen collides..." << std::endl;
        ball.setVelocity(ball.getVelocity().x*(-1), ball.getVelocity().y);
    }

    // upper screen
    if( ballY <= 0 )
    {
        std::cout << "Screen collides..." << std::endl;
        ball.setVelocity(ball.getVelocity().x, ball.getVelocity().y*(-1));
    }
}

void collisionAttackPaddle(Ball& ball, const AttackPaddle& pad)
{
    int ballX     = ball.getBody().getPosition().x;
    int ballY     = ball.getBody().getPosition().y + ball.getBody().getRadius();

    int padTopY   = pad.getBody().getPosition().y - apadSize.y/2;
    int padLeftX  = pad.getBody().getPosition().x - (apadSize.x/2);
    int padRightX = pad.getBody().getPosition().x + (apadSize.x/2);

    if( (ballY >= padTopY) && (ballY < (padTopY + apadSize.y/2)) )
    {
        // If the ball hits in the left/right 1/3 side of the pad,
        // it gets faster in the x/y direction (bit more in the x direction).
        if( ((ballX >= padLeftX) && (ballX < (padLeftX + apadSize.x/3)))
        ||  ((ballX > (padRightX - apadSize.x/3)) && (ballX <= padRightX)) )
        {
            std::cout << "Attack paddle left-size collides..." << ballY << ", " << padTopY << std::endl;
            ball.setVelocity(ball.getVelocity().x*(1.1), ball.getVelocity().y*(-1.05));
        }

        // If the ball hit in the middle, nothing happens.
        if( (ballX >= (padLeftX + apadSize.x/3)) && (ballX <= (padRightX - apadSize.x/3)) )
        {
            std::cout << "Attack paddle collides..." << ballY << ", " << padTopY << std::endl;
            ball.setVelocity(ball.getVelocity().x, ball.getVelocity().y*(-1));
        }
    }
}
