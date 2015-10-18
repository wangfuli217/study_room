#ifndef __BALL_H__
#define __BALL_H__

#include <SFML/Graphics.hpp>

class Ball
{
public:
	Ball(int radius, sf::Vector2f& pos);
	const sf::CircleShape& getBody() const { return body; }
	void draw(sf::RenderWindow& w);

private:
	sf::CircleShape body;
    sf::Vector2f velocity;
};

#endif // __BALL_H__
