#ifndef __PADDLE_H__
#define __PADDLE_H__

#include <SFML/Graphics.hpp>
#include <iostream>

class Paddle
{
public:
    Paddle(const sf::Vector2f& size, const sf::Vector2f& pos);
    Paddle(const sf::Vector2f& size, const sf::Vector2f& pos, const sf::Vector2f& origin);
    const sf::RectangleShape& getBody() const { return body; }

protected:
    sf::RectangleShape body;
};

#endif // __PADDLE_H__
