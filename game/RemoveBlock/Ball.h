#ifndef __BALL_H__
#define __BALL_H__

#include <SFML/Graphics.hpp>
#include <iostream>
#include <random>
#include <cstdlib>
#include <cmath>

float calBallAngle();
extern const sf::Vector2f apadSize;

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
	float getSpeed()
	{
		return speed;
	}
	void setSpeed(float s)
	{
		speed = s;
	}	
	float getAngle()
	{
		return angle;
	}
	void setAngle(float a)
	{
		angle = a;
	}
	sf::Vector2f Top() const;
	sf::Vector2f Left() const;
	sf::Vector2f Bottom() const;
	sf::Vector2f Right() const;
	sf::Vector2f Center() const;
	sf::Vector2f calVelocity();

private:
	sf::CircleShape body;
    sf::Vector2f firstPos;
    sf::Clock clock;
    sf::Vector2f snapshotVelocity;
    float speed;
    float angle;
};

#endif // __BALL_H__
