#ifndef __ATTACK_PADDLE_H__
#define __ATTACK_PADDLE_H__

#include <SFML/System/Clock.hpp>
#include <Paddle.h>
#include <Variables.h>
#include <map>
#include <algorithm>

class Bullet : public Paddle
{
public:
    Bullet(const sf::Vector2f& size, const sf::Vector2f& pos)
		: Paddle(size,pos)
	{
        body.setFillColor(sf::Color(051,255,051));
	}
};

class AttackPaddle : public Paddle
{
public:
    AttackPaddle(const sf::Vector2f& size);
    void moveBody();
    void drawBody(sf::RenderWindow& w);
    void resetPos();
    void shootBullet() throw();
    std::map<int,Bullet*>& getBullets()
    {
	    return bullets;
    }
    void clearBullets();
    void moveBullets();
    void drawBullets(sf::RenderWindow& w);

private:
    sf::Vector2f firstPos;
    int bulletKey;
    std::map<int,Bullet*> bullets;
    sf::Clock clock;
};

#endif // __ATTACK_PADDLE_H__
