#include <Ball.h>
#include <Variables.h>

Ball::Ball(int radius, sf::Vector2f& pos)
{
    body.setRadius(radius);
    body.setOrigin(radius/2, radius/2);
    body.setPosition(pos);

    velocity.x = 0;
    velocity.y = 0;

    firstPos = pos;
}

void Ball::start()
{
    velocity.x = 5;
    velocity.y = -10;
}

void Ball::reset()
{
    start();

    body.setOrigin(getBody().getRadius()/2, getBody().getRadius()/2);
    body.setPosition(firstPos);
}

void Ball::draw(sf::RenderWindow& w)
{
    body.move(velocity);

    w.draw(body);
}
