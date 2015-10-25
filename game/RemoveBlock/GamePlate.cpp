#include <GamePlate.h>

void GamePlate::newGame()
{
    int numHorizontalBlock = 20;
    int numVerticalBlock = 6;
    int blockWidth = width / numHorizontalBlock;
    int blockHeight = 40;
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

            std::shared_ptr<Block> t(new Block(size,pos));
            target[++getKey()] = t;
        }
    }
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
