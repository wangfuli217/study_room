#include <Paddle.h>

Paddle::Paddle(const sf::Vector2f& size, const sf::Vector2f& pos)
{
    body.setSize(size);
    body.setPosition(pos);  // top-left point
}

sf::Vector2f Paddle::TopLeft() const
{
    return body.getPosition();
}

sf::Vector2f Paddle::TopMiddle() const
{
    return { body.getPosition().x + body.getSize().x/2,
             body.getPosition().y };
}

sf::Vector2f Paddle::TopRight() const
{
    return { body.getPosition().x + body.getSize().x,
             body.getPosition().y };
}

sf::Vector2f Paddle::Center() const
{
    return { body.getPosition().x + body.getSize().x/2,
             body.getPosition().y + body.getSize().y/2 };
}

sf::Vector2f Paddle::BottomLeft() const
{
    return { body.getPosition().x,
             body.getPosition().y + body.getSize().y };
}

sf::Vector2f Paddle::BottomMiddle() const
{
    return { body.getPosition().x + body.getSize().x/2,
             body.getPosition().y + body.getSize().y };
}

sf::Vector2f Paddle::BottomRight() const
{
    return { body.getPosition().x + body.getSize().x,
             body.getPosition().y + body.getSize().y };
}

float Paddle::LeftX() const
{
    return BottomLeft().x;
}

float Paddle::RightX() const
{
    return BottomRight().x;
}

float Paddle::TopY() const
{
    return TopMiddle().y;
}

float Paddle::BottomY() const
{
    return BottomMiddle().y;
}
