#include <Ball.h>
#include <Variables.h>

Ball::Ball(int radius, sf::Vector2f& pos)
{
    body.setRadius(radius);
    body.setPosition(pos);
    body.setOrigin(radius/2, radius/2);

    velocity.x = 0;
    velocity.y = 0;
}

void Ball::start()
{
    velocity.x = 4;
    velocity.y = -8;
}

void Ball::draw(sf::RenderWindow& w)
{
    body.move(velocity);

    w.draw(body);
}
