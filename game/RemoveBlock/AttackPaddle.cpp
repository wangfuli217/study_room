#include <AttackPaddle.h>

AttackPaddle::AttackPaddle(const sf::Vector2f& size, const sf::Vector2f& pos)
    : Paddle(size,pos,size/2.f)
{
    body.setFillColor(sf::Color(204,204,204));
    firstPos = pos;
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

void AttackPaddle::reset()
{
    body.setPosition({firstPos.x,firstPos.y-getBody().getSize().y/2});
}
