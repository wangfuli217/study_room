#ifndef __ATTACK_PADDLE_H__
#define __ATTACK_PADDLE_H__

#include <Paddle.h>
#include <Variables.h>

class AttackPaddle : public Paddle
{
public:
    AttackPaddle(const sf::Vector2f& size, const sf::Vector2f& pos);
    void draw(sf::RenderWindow& w);  /* TODO can be virtual */
    void reset();

private:
    sf::Vector2f firstPos;
};

#endif // __ATTACK_PADDLE_H__
