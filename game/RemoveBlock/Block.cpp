#include <Block.h>
#include <random>
#include <iostream>

Block::Block(const sf::Vector2f& size, const sf::Vector2f& pos)
    : Paddle(size,pos)
{
    std::random_device rd;

    int R = rd() % 255;
    int G = rd() % 255;
    int B = rd() % 255;

    // std::cout << "R : " << R << ", G : " << G << ", B : " << B << std::endl;

    body.setFillColor(sf::Color(R,G,B));
    body.setOutlineThickness(3);
    body.setOutlineColor(sf::Color::Black);
}
