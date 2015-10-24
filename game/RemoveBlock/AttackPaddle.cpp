#include <AttackPaddle.h>

// calculate first top-left position of paddle
AttackPaddle::AttackPaddle(const sf::Vector2f& size)
    : Paddle(size, {plateWidth/2-size.x/2, plateHeight-size.y})
{
    //body.setFillColor(sf::Color(204,204,204));
    body.setFillColor(sf::Color(255,255,255));
    firstPos = {plateWidth/2-size.x/2, plateHeight-size.y};
}

void AttackPaddle::move()
{
    if(sf::Keyboard::isKeyPressed(sf::Keyboard::Key::Left))
    {
        if(LeftX() > 0 )
        {
            body.move(-8.f,0.f);
        }
    }

    if(sf::Keyboard::isKeyPressed(sf::Keyboard::Key::Right))
    {
        if(RightX() < plateWidth )
        {
            body.move(8.f,0.f);
        }
    }
}

void AttackPaddle::draw(sf::RenderWindow& w)
{
    w.draw(body);
}

void AttackPaddle::reset()
{
    body.setPosition(firstPos);
}
