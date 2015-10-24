#include <Ball.h>
#include <Variables.h>

Ball::Ball(int radius)
{
    body.setFillColor(sf::Color(255,255,255));
    body.setRadius(radius);

    // 4 각이든 원이든 좌표의 기준은 top-left 지점.
    // (Circle 은 이를 감싸는 사각을 그렸을 때의 top-left 지점)
    // ball starts from the top of apad
    body.setPosition({plateWidth/2-radius, plateHeight-radius-apadSize.y});

    velocity.x = 6;
    velocity.y = -12;

    firstPos = body.getPosition();
}

void Ball::reset()
{
    body.setPosition(firstPos);
}

void Ball::move()
{
    body.move(velocity);
}

int Ball::speedX() const
{
    return abs(static_cast<int>(velocity.x));
}

int Ball::speedY() const
{
    return abs(static_cast<int>(velocity.y));
}

// 원을 감쌀 수 있는 사각형의 좌상꼭지점의 위치가 pos 가 됨.
// 따라서, 원의 중심이 그 위치로 가려면 어떻게 해야하는지 계산해야 함.
// 그 계산한 값으로 Circle 객체의 setPosition 함수 인자로 넘겨야 함.
void Ball::moveto(const sf::Vector2f& pos)
{
    body.setPosition( {pos.x-body.getRadius(), pos.y-body.getRadius()*2} );
}

void Ball::draw(sf::RenderWindow& w)
{
    w.draw(body);
}

// Left end point is the standard point of a ball.
sf::Vector2f Ball::Left() const
{
    return body.getPosition();
}

sf::Vector2f Ball::Top() const
{
    return { body.getPosition().x + body.getRadius(),
             body.getPosition().y - body.getRadius() };
}

sf::Vector2f Ball::Bottom() const
{
    return { body.getPosition().x + body.getRadius(),
             body.getPosition().y + body.getRadius() };
}

sf::Vector2f Ball::Right() const
{
    return { body.getPosition().x + body.getRadius()*2,
             body.getPosition().y };
}

sf::Vector2f Ball::Center() const
{
    return { body.getPosition().x + body.getRadius(),
             body.getPosition().y };
}
