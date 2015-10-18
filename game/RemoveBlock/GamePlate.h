#ifndef __GAME_PLATE_H__
#define __GAME_PLATE_H__

#include <SFML/Graphics.hpp>
#include <TargetPaddle.h>
#include <vector>
#include <algorithm>

class GamePlate
{
public:
    GamePlate(int w, int h) : width(w), height(h) {}
	void newGame();
	int getWidth() const { return width; }
	int getHeight() const { return height; }
	void drawTargetPads(sf::RenderWindow& w);

private:
	int width;
	int height;
	std::vector<TargetPaddle*> target;
};

#endif // __GAME_PLATE_H__
