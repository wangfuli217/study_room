#ifndef __BALL_H__
#define __BALL_H__

#include <SFML/Graphics.hpp>

class Ball
{
public:
	Ball(int radius, sf::Vector2f& pos);
	const sf::CircleShape& getBody() const
	{
		return body;
	}
	void draw(sf::RenderWindow& w);
	void start();
	const sf::Vector2f getVelocity() const
	{
		return velocity;
	}
	void setVelocity(int x, int y)
	{
		velocity.x = x;
		velocity.y = y;
	}

private:
	sf::CircleShape body;
    sf::Vector2f velocity;
};

#endif // __BALL_H__
