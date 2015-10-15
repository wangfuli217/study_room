#include <Paddle.hpp>

namespace pong
{

Paddle::Paddle(int n, int width, int height, int pos_x, int pos_y)
{
    body.setSize(sf::Vector2f(width,height));
    body.setPosition(sf::Vector2f(pos_x,pos_y));
    player_no = n;
}

int Paddle::Height()
{
    return body.getSize().y;
}

int Paddle::Width()
{
    return body.getSize().x;
}

int Paddle::X()
{
    return body.getPosition().x;
}

int Paddle::Y()
{
    return body.getPosition().y;
}

void Paddle::checkKeyPressed()
{
}

const sf::RectangleShape& Paddle::getBody() const
{
    return body;
}

} // namespace pong
