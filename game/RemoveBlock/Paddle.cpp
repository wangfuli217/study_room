#include <Paddle.h>

Paddle::Paddle(const sf::Vector2f& size, const sf::Vector2f& pos)
{
    body.setSize(size - sf::Vector2f(3,3));
    body.setPosition(pos);
    body.setOutlineThickness(3);
    body.setOutlineColor(sf::Color::Black);
}
