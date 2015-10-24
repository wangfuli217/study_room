#ifndef __ATTACK_PADDLE_H__
#define __ATTACK_PADDLE_H__

#include <Paddle.h>
#include <Variables.h>

class AttackPaddle : public Paddle
{
public:
	AttackPaddle(const sf::Vector2f& size);
    void move();
    void draw(sf::RenderWindow& w);
    void reset();

private:
    sf::Vector2f firstPos;
};

#endif // __ATTACK_PADDLE_H__
