#include <Ball.hpp>
#include <Paddle.hpp>

using namespace pong;

int main()
{
    std::shared_ptr<Paddle> paddle1(new Paddle(1,70,10,10,10));
    std::shared_ptr<Paddle> paddle2(new Paddle(1,70,10,100,100));
    std::shared_ptr<Ball> ball(new Ball(3,300,300));

    std::srand(static_cast<unsigned int>(std::time(NULL)));

    sf::RenderWindow window(sf::VideoMode(GamePlate::WIDTH, GamePlate::HEIGHT, 32),
                            "pong game",
                            sf::Style::Titlebar | sf::Style::Close);
    window.setVerticalSyncEnabled(true);

    while(window.isOpen())
    {
        sf::Event event;
        while(window.pollEvent(event))
        {
            if(event.type == sf::Event::Closed)
            {
                window.close();
                break;
            }
        }

        window.clear(sf::Color(50,200,50));

        window.draw(paddle1->getBody());
        window.draw(paddle2->getBody());
        window.draw(ball->getBody());
        window.display();
    }

    return 0;
}
