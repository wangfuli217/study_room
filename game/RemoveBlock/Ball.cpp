#include <Ball.h>

Ball::Ball(int radius, sf::Vector2f& pos)
{
    body.setRadius(radius);
    body.setPosition(pos);

    velocity.x = 5;
    velocity.y = 10;
}

void Ball::draw(sf::RenderWindow& w)
{
    body.move(velocity);

    w.draw(body);
}
