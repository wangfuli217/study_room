#ifndef __BALL_H__
#define __BALL_H__

#include <SFML/Graphics.hpp>
#include <NonCopyable.hpp>
#include <GamePlate.hpp>

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
    const sf::CircleShape& getBody() const;

private:
	sf::CircleShape body;
    sf::Vector2<float> velocity;
};

} // namespace pong

#endif // __BALL_H__
