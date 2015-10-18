#include <GamePlate.h>

void GamePlate::newGame()
{
    int numHorizontalPad = 7;
    int numVertivalPad = 4;
    int padWidth = 0;
    int padHeight = 40;
    TargetPaddle * t = nullptr;
    sf::Vector2f size;
    sf::Vector2f pos;

    target.clear();

    padWidth = width / numHorizontalPad;

    for(int i=0; i<numVertivalPad; ++i)
    {
        for(int j=0; j<numHorizontalPad; ++j)
        {
            size.x = padWidth;
            size.y = padHeight;

            pos.x = padWidth * j;
            pos.y = padHeight * i;

            t = new TargetPaddle(size,pos);
            target.push_back(t);
        }
    }
}

void GamePlate::drawTargetPads(sf::RenderWindow& w)
{
    for(auto i:target)
    {
        w.draw(i->getBody());
    }
}
