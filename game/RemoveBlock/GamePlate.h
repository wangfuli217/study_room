#ifndef __GAME_PLATE_H__
#define __GAME_PLATE_H__

#include <SFML/Graphics.hpp>
#include <TargetPaddle.h>
#include <map>
#include <algorithm>

class GamePlate
{
public:
    GamePlate(int w, int h) : width(w), height(h), paddleKey(0) {}
	void newGame();
	int getWidth() const
	{
		return width;
	}
	int getHeight() const
	{
		return height;
	}
	int& getPaddleKey()
	{
		return paddleKey;
	}
	const int getPaddleKey() const
	{
		return paddleKey;
	}
	void drawTargetPads(sf::RenderWindow& w);
	std::map<int,TargetPaddle*>& getTargetPaddles()
	{
		return target;
	}
	TargetPaddle& getKeyPaddle(const int key);
	const TargetPaddle& getKeyPaddle(const int key) const;
	void pause(sf::RenderWindow& w, const std::string& msg);

private:
	int width;
	int height;
	int paddleKey;
	std::map<int,TargetPaddle*> target;
    sf::Text pauseMsg;
};

#endif // __GAME_PLATE_H__
