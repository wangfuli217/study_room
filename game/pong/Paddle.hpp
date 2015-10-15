#ifndef __PADDLE_H__
#define __PADDLE_H__

#include <SFML/Graphics.hpp>
#include <NonCopyable.hpp>
#include <GamePlate.hpp>

namespace pong
{
	
class Paddle : private NonCopyable
{
public:
	Paddle(int n, int height, int width, int x, int y);
	int Height();
	int Width();
	int X();
	int Y();
	void checkKeyPressed();
    const sf::RectangleShape& getBody() const;

private:
	sf::RectangleShape body;
	int player_no;
};

} // namespace pong

#endif // __PADDLE_H__
