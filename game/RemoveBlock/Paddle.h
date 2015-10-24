#ifndef __PADDLE_H__
#define __PADDLE_H__

#include <SFML/Graphics.hpp>
#include <Variables.h>
#include <iostream>

class Paddle
{
public:
	virtual ~Paddle() {}
    Paddle(const sf::Vector2f& size, const sf::Vector2f& pos);
    sf::RectangleShape& getBody() { return body; }
    const sf::Vector2f getPos() const { return body.getPosition(); }
    void setPos(const sf::Vector2f& pos) { body.setPosition(pos); }

    float LeftX() const;
    float RightX() const;
    float TopY() const;
    float BottomY() const;

    sf::Vector2f TopLeft() const;
    sf::Vector2f TopMiddle() const;
    sf::Vector2f TopRight() const;
    sf::Vector2f Center() const;
    sf::Vector2f BottomLeft() const;
    sf::Vector2f BottomMiddle() const;
    sf::Vector2f BottomRight() const;

protected:
    sf::RectangleShape body;
};

#endif // __PADDLE_H__
