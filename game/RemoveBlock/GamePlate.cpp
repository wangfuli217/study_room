#include <GamePlate.h>

void GamePlate::newGame()
{
    int numHorizontalPad = 10;
    int numVerticalPad = 4;
    int padWidth = width / numHorizontalPad;
    int padHeight = 40;
    TargetPaddle * t = nullptr;
    sf::Vector2f size;
    sf::Vector2f pos;

    target.clear();

    for(int i=0; i<numVerticalPad; ++i)
    {
        for(int j=0; j<numHorizontalPad; ++j)
        {
            size.x = padWidth;
            size.y = padHeight;

            pos.x = padWidth * j;
            pos.y = padHeight * i;

            t = new TargetPaddle(size,pos);
            target[++getPaddleKey()] = t;
        }
    }

    font.loadFromFile("resources/sansation.ttf");
}

void GamePlate::drawTargetPads(sf::RenderWindow& w)
{
    for(auto i:target)
    {
        w.draw(i.second->getBody());
    }
}

TargetPaddle& GamePlate::getKeyPaddle(const int key)
{
    return *target.at(key);
}

const TargetPaddle& GamePlate::getKeyPaddle(const int key) const
{
    return *target.at(key);
}

void GamePlate::pause(sf::RenderWindow& w, const std::string& msg)
{
    pauseMsg.setFont(font);
    pauseMsg.setCharacterSize(40);
    pauseMsg.setPosition(170.f, plateHeight/2);
    pauseMsg.setColor(sf::Color::White);
    pauseMsg.setString(msg);

    w.draw(pauseMsg);
}
