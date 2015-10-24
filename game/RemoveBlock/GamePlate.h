#ifndef __GAME_PLATE_H__
#define __GAME_PLATE_H__

#include <SFML/Graphics.hpp>
#include <Block.h>
#include <Variables.h>
#include <map>
#include <algorithm>

class GamePlate
{
public:
    GamePlate(int w, int h) : width(w), height(h), blockKey(0) {}
	void newGame();
	int getWidth() const
	{
		return width;
	}
	int getHeight() const
	{
		return height;
	}
	int& getKey()
	{
		return blockKey;
	}
	const int getKey() const
	{
		return blockKey;
	}
	void drawBlocks(sf::RenderWindow& w);
	std::map<int,Block*>& getBlocks()
	{
		return target;
	}
	Block& getKeyBlock(const int key);
	const Block& getKeyBlock(const int key) const;

private:
	int width;
	int height;
	int blockKey;
	std::map<int,Block*> target;
};

#endif // __GAME_PLATE_H__
