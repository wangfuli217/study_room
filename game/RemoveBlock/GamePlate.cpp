#include <GamePlate.h>

void GamePlate::newGame()
{
    int numHorizontalBlock = 10;
    int numVerticalBlock = 4;
    int blockWidth = width / numHorizontalBlock;
    int blockHeight = 40;
    Block * t = nullptr;
    sf::Vector2f size;
    sf::Vector2f pos;

    target.clear();

    for(int i=0; i<numVerticalBlock; ++i)
    {
        for(int j=0; j<numHorizontalBlock; ++j)
        {
            size.x = blockWidth;
            size.y = blockHeight;

            pos.x = blockWidth * j;
            pos.y = blockHeight * i;

            t = new Block(size,pos);
            target[++getKey()] = t;
        }
    }

    font.loadFromFile("resources/sansation.ttf");
}

void GamePlate::drawBlocks(sf::RenderWindow& w)
{
    for(auto i:target)
    {
        w.draw(i.second->getBody());
    }
}

Block& GamePlate::getKeyBlock(const int key)
{
    return *target.at(key);
}

const Block& GamePlate::getKeyBlock(const int key) const
{
    return *target.at(key);
}

void GamePlate::pause(const std::string& msg)
{
    pauseMsg.setFont(font);
    pauseMsg.setCharacterSize(40);
    pauseMsg.setPosition(170.f, plateHeight/2);
    pauseMsg.setColor(sf::Color::White);
    pauseMsg.setString(msg);
}
