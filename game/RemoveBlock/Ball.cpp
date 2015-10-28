#include <Ball.h>
#include <Variables.h>

Ball::Ball(int radius)
{
    std::random_device rd;

    body.setFillColor(sf::Color(255,255,255));
    body.setRadius(radius);

    // 4 각이든 원이든 좌표의 기준은 top-left 지점.
    // (Circle 은 이를 감싸는 사각을 그렸을 때의 top-left 지점)
    // ball starts from the top of apad
    body.setPosition({plateWidth/2-radius, plateHeight-radius-apadSize.y});

    angle = calBallAngle();
    speed = ballInitSpeed;

    std::cout << "Ball (speed,angle) = "
              << "(" << speed << "," << angle*180/pi << ")" << std::endl;

    //clock.restart();

    firstPos = body.getPosition();
}

void Ball::reset()
{
    angle = calBallAngle();
    speed = ballInitSpeed;

    std::cout << "Reset Ball (speed,angle) = "
              << "(" << speed << "," << angle*180/pi << ")" << std::endl;

    clock.restart();
}

sf::Vector2f Ball::calVelocity()
{
    float deltaTime = clock.restart().asSeconds();
    float velX;
    float velY;

    velX = speed * std::cos(angle) * deltaTime;
    velY = -(speed * std::sin(angle) * deltaTime);

    // std::cout << "Calulate velocity ("
    //           << velX << "," << velY << ")" << std::endl;
    return {velX,velY};
}

// moves ball only here
void Ball::moveBody()
{
    snapshotVelocity = calVelocity();
    body.move(snapshotVelocity);
}

int Ball::speedX() const
{
    return abs(static_cast<int>(snapshotVelocity.x));
}

int Ball::speedY() const
{
    return abs(static_cast<int>(snapshotVelocity.y));
}

// 원을 감쌀 수 있는 사각형의 좌상꼭지점의 위치가 pos 가 됨.
// 따라서, 원의 중심이 그 위치로 가려면 어떻게 해야하는지 계산해야 함.
// 그 계산한 값으로 Circle 객체의 setPosition 함수 인자로 넘겨야 함.
void Ball::movePos(const sf::Vector2f& pos)
{
    body.setPosition( {pos.x-body.getRadius(), pos.y-body.getRadius()*2} );
}

void Ball::drawBody(sf::RenderWindow& w)
{
    w.draw(body);
}

// Left Upper point is the standard point of a ball.
sf::Vector2f Ball::Left() const
{
    return { body.getPosition().x,
             body.getPosition().y + body.getRadius() };
}

sf::Vector2f Ball::Top() const
{
    return { body.getPosition().x + body.getRadius(),
             body.getPosition().y };
}

sf::Vector2f Ball::Bottom() const
{
    return { body.getPosition().x + body.getRadius(),
             body.getPosition().y + body.getRadius()*2 };
}

sf::Vector2f Ball::Right() const
{
    return { body.getPosition().x + body.getRadius()*2,
             body.getPosition().y + body.getRadius() };
}

sf::Vector2f Ball::Center() const
{
    return { body.getPosition().x + body.getRadius(),
             body.getPosition().y + body.getRadius() };
}
