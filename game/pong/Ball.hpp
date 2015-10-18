#ifndef __BALL_H__
#define __BALL_H__

#include <SFML/Graphics.hpp>
#include <NonCopyable.hpp>
#include <GamePlate.hpp>
#include <iostream>

namespace pong
{
	
class Ball : private NonCopyable
{
public:
	Ball(int radius, int x, int y);
	int Radius() const;
	int X() const;
	int Y() const;
    void move();
    void collides();
    void setPos(sf::Vector2f pos);
    int collidesPad(int p, const sf::Vector2f& size, const sf::Vector2f& position);
    const sf::CircleShape& getBody() const;
    constexpr static float pi = 3.141592f;

private:
	sf::CircleShape body;
    sf::Vector2f velocity;
};

} // namespace pong

#endif // __BALL_H__
