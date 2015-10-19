#include <GamePlate.h>

void GamePlate::newGame()
{
    int numHorizontalPad = 7;
    int numVertivalPad = 4;
    int padWidth = width / numHorizontalPad;
    int padHeight = 40;
    TargetPaddle * t = nullptr;
    sf::Vector2f size;
    sf::Vector2f pos;

    target.clear();

    for(int i=0; i<numVertivalPad; ++i)
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
