#include <AttackPaddle.h>

AttackPaddle::AttackPaddle(const sf::Vector2f& size, const sf::Vector2f& pos)
    : Paddle(size,pos)
{
    body.setFillColor(sf::Color(204,204,204));
    body.setOrigin(size/2.f);
}

void AttackPaddle::draw(sf::RenderWindow& w)
{
    if(sf::Keyboard::isKeyPressed(sf::Keyboard::Key::Left))
    {
        if((body.getPosition().x - body.getSize().x/2) > 0 )
        {
            body.move(-8.f,0.f);
        }
    }

    if(sf::Keyboard::isKeyPressed(sf::Keyboard::Key::Right))
    {
        if((body.getPosition().x + body.getSize().x/2) < plateWidth )
        {
            body.move(8.f,0.f);
        }
    }

    w.draw(body);
}
