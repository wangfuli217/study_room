#include <Paddle.h>

Paddle::Paddle(const sf::Vector2f& size, const sf::Vector2f& pos)
{
    // For paddles which have outlines
    body.setSize(size - sf::Vector2f(4,4));
    body.setPosition(pos);
    body.setOutlineThickness(2);
    body.setOutlineColor(sf::Color::Black);
}

Paddle::Paddle(const sf::Vector2f& size, const sf::Vector2f& pos, const sf::Vector2f& origin)
{
    body.setOrigin(origin);
    body.setSize(size);
    body.setPosition({pos.x,pos.y-size.y/2});
}
