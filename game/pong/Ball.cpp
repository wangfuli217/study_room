#include <Ball.hpp>

namespace pong
{

Ball::Ball(int radius, int pos_x, int pos_y)
{
    body.setRadius(radius);
    body.setPosition(sf::Vector2f(pos_x,pos_y));
}

int Ball::Radius() const
{
    return static_cast<int>(body.getRadius());
}

int Ball::X() const
{
    return body.getPosition().x;
}

int Ball::Y() const
{
    return body.getPosition().y;
}

void Ball::move()
{
    body.move(velocity);
}

void Ball::collides()
{
    if(body.getPosition().y <= 0 || body.getPosition().y >= GamePlate::HEIGHT)
        velocity *= static_cast<float>(-1);
}

const sf::CircleShape& Ball::getBody() const
{
    return body;
}

} // namespace pong
