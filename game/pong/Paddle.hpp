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
    using Key = sf::Keyboard::Key;

	Paddle(int width, int height, int x, int y, int UpKey, int DownKey);
	int Height();
	int Width();
	int X();
	int Y();
	void checkKeyPressed();
    const sf::RectangleShape& getBody() const;
    const static int VELOCITY = 10;

private:
	sf::RectangleShape body;
    Key UpKey, DownKey;
};

} // namespace pong

#endif // __PADDLE_H__
