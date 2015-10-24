#ifndef __BLOCK_H__
#define __BLOCK_H__

#include <Paddle.h>
#include <random>

class Block : public Paddle
{
public:
    Block(const sf::Vector2f& size, const sf::Vector2f& pos);
};

#endif // __BLOCK_H__
