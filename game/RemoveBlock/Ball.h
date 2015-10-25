#ifndef __BALL_H__
#define __BALL_H__

#include <SFML/Graphics.hpp>
#include <iostream>
#include <random>
#include <cstdlib>

class Ball
{
public:
	Ball(int radius);
	const sf::CircleShape& getBody() const
	{
		return body;
	}
	sf::CircleShape& getBody()
	{
		return body;
	}
	void moveBody();
	void movePos(const sf::Vector2f& pos);
	void drawBody(sf::RenderWindow& w);
	void reset();
	int speedX() const;
	int speedY() const;
	const sf::Vector2f getVelocity() const
	{
		return velocity;
	}
	void setVelocity(int x, int y)
	{
		velocity.x = x;
		velocity.y = y;
	}
	sf::Vector2f Top() const;
	sf::Vector2f Left() const;
	sf::Vector2f Bottom() const;
	sf::Vector2f Right() const;
	sf::Vector2f Center() const;

private:
	sf::CircleShape body;
    sf::Vector2f velocity;
    sf::Vector2f firstPos;
};

#endif // __BALL_H__
