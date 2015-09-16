#ifndef GUARD_BALL_H
#define GUARD_BALL_H

class Ball
{
public:
    sf::CircleShape ball;
    int size;
    int x;
    int y;
    sf::Vector2f velocity;
    Ball::Ball(int size, int x, int y);
    void move();
    void collides();
};

#endif GUARD_BALL_H
