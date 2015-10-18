#include <TargetPaddle.h>

TargetPaddle::TargetPaddle(const sf::Vector2f& size, const sf::Vector2f& pos)
    : Paddle(size,pos)
{
    body.setFillColor(sf::Color(rand()%255,rand()%255,rand()%255));
}
