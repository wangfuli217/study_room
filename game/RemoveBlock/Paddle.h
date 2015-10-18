#ifndef __PADDLE_H__
#define __PADDLE_H__

#include <SFML/Graphics.hpp>

class Paddle
{
public:
    Paddle(const sf::Vector2f& size, const sf::Vector2f& pos);
    const sf::RectangleShape& getBody() const { return body; }

protected:
    sf::RectangleShape body;
};

#endif // __PADDLE_H__
