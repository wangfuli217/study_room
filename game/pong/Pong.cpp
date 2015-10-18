#include <Ball.hpp>
#include <Paddle.hpp>

using namespace pong;
using Key = sf::Keyboard::Key;

int main()
{
    int ret = 0;
    int paddleWidth = 20;
    int paddleHeight = 150;
    int ballRadius = 10;

    Paddle paddle1( paddleWidth,
                    paddleHeight,
                    0,
                    GamePlate::HEIGHT/2-paddleHeight/2,
                    Key::W,
                    Key::S);
    Paddle paddle2( paddleWidth,
                    paddleHeight,
                    GamePlate::WIDTH-paddleWidth,
                    GamePlate::HEIGHT/2-paddleHeight/2,
                    Key::Up,
                    Key::Down);
    Ball ball( ballRadius,
               GamePlate::WIDTH/2,
               GamePlate::HEIGHT/2);

    std::srand(static_cast<unsigned int>(std::time(NULL)));

    sf::RenderWindow window(sf::VideoMode(GamePlate::WIDTH, GamePlate::HEIGHT, 32),
                            "pong game",
                            sf::Style::Titlebar | sf::Style::Close);
    window.setVerticalSyncEnabled(true);

    int isPlaying = 1;

    while(window.isOpen())
    {
        sf::Event event;
        while(window.pollEvent(event))
        {
            if(event.type == sf::Event::Closed ||
                sf::Keyboard::isKeyPressed(Key::Escape))
            {
                window.close();
                break;
            }

            if(sf::Keyboard::isKeyPressed(Key::Space))
            {
                isPlaying = 1;
                continue;
            }
        }

        window.clear(sf::Color(50,200,50));

        if(isPlaying)
        {
            paddle1.checkKeyPressed();
            paddle2.checkKeyPressed();

            ball.collides();
            ret = ball.collidesPad( 1, paddle1.getBody().getSize(), paddle1.getBody().getPosition());
            if(ret)
            {
                ball.setPos(sf::Vector2f(GamePlate::WIDTH/2,GamePlate::HEIGHT/2));
                isPlaying = 0;
                continue;
            }

            ret = ball.collidesPad(2, paddle2.getBody().getSize(), paddle2.getBody().getPosition());
            if(ret)
            {
                ball.setPos(sf::Vector2f(GamePlate::WIDTH/2,GamePlate::HEIGHT/2));
                isPlaying = 0;
                continue;
            }
            ball.move();
        }

        window.draw(paddle1.getBody());
        window.draw(paddle2.getBody());
        window.draw(ball.getBody());

        window.display();
    }

    return 0;
}
