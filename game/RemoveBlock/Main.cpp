#include <GamePlate.h>
#include <AttackPaddle.h>
#include <Ball.h>

float plateWidth = 1400.f;
float plateHeight = 1000.f;

int main()
{
    int isPlaying = 0;
    sf::Vector2f apadSize = {180, 40};

    GamePlate plate(plateWidth, plateHeight);
    AttackPaddle apad(apadSize, {plateWidth/2, plateHeight});
    sf::Vector2f ballPos = {plateWidth/2, 40};
    Ball ball(10, ballPos);

    plate.newGame();

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
            }
        }

        if(isPlaying)
        {
            w.clear(sf::Color(255,204,102));

            plate.drawTargetPads(w);
            apad.draw(w);
            ball.draw(w);
        }

        w.display();
    }

    return 0;
}
