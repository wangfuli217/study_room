#include <Paddle.hpp>

namespace pong
{

Paddle::Paddle(int width, int height, int pos_x, int pos_y, int Up, int Down)
{
    body.setSize(sf::Vector2f(width,height));
    body.setPosition(sf::Vector2f(pos_x,pos_y));
    body.setFillColor(sf::Color(rand()%255,rand()%255,rand()%255));
    body.setOutlineThickness(3);
    body.setOutlineColor(sf::Color::Black);

    UpKey = static_cast<sf::Keyboard::Key>(Up);
    DownKey = static_cast<sf::Keyboard::Key>(Down);
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
    if(sf::Keyboard::isKeyPressed(UpKey))
    {
        if(body.getPosition().y > 0)
        {
            body.move(sf::Vector2f(0,-VELOCITY));
        }
    }
    if(sf::Keyboard::isKeyPressed(DownKey))
    {
        if(body.getPosition().y + body.getSize().y < GamePlate::HEIGHT)
        {
            body.move(sf::Vector2f(0,VELOCITY));
        }
    }
}

const sf::RectangleShape& Paddle::getBody() const
{
    return body;
}

} // namespace pong
