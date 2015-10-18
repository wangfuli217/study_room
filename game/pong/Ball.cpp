#include <Ball.hpp>

namespace pong
{

Ball::Ball(int radius, int pos_x, int pos_y)
{
    body.setRadius(radius);
    body.setPosition(sf::Vector2f(pos_x,pos_y));
}

int Ball::Radius() const
{
    return static_cast<int>(body.getRadius());
}

int Ball::X() const
{
    return body.getPosition().x;
}

int Ball::Y() const
{
    return body.getPosition().y;
}

void Ball::move()
{
    if(velocity.x == 0 && velocity.y == 0)
    {
        velocity.x = 10;
        velocity.y = 5;
    }

    // set position
    body.move(velocity);
}

void Ball::setPos(sf::Vector2f pos)
{
    body.setPosition(pos);
}

void Ball::collides()
{
    if(body.getPosition().y <= 0 || body.getPosition().y >= GamePlate::HEIGHT)
    {
        velocity.y *= -1;
    }
}

int Ball::collidesPad(int player_no, const sf::Vector2f& size, const sf::Vector2f& position)
{
    int ballX = body.getPosition().x;
    int ballY = body.getPosition().y;

    int padTop = position.y;
    int padBottom = position.y + size.y;

    if(player_no == 1)
    {
        if( (ballX >= size.x-2 && ballX <= size.x) && (ballY >= padTop && ballY <= padBottom) )
        {
            std::cout << "Pad1 collision" << std::endl;
            velocity.x *= -1;

            if(ballY < padTop + size.y/3)
            {
                velocity.y = -3;
            }

            if(ballY > padTop + size.y - size.y/3)
            {
                velocity.y = 3;
            }
        }

        if(ballX <= 0)
        {
            std::cout << "Paddle1 Die..." << std::endl;
            return 1;
        }
    }

    if(player_no == 2)
    {
        if( ((ballX >= GamePlate::WIDTH-size.x) && (ballX < GamePlate::WIDTH-size.x+2))
         && (ballY > padTop && ballY < padBottom) )
        {
            std::cout << "Pad2 collision" << std::endl;
            velocity.x *= -1;

            if(ballY < padTop + size.y/3)
            {
                velocity.y = -3;
            }

            if(ballY > padTop + size.y - size.y/3)
            {
                velocity.y = 3;
            }
        }

        if(ballX >= GamePlate::WIDTH)
        {
            std::cout << "Paddle2 Die..." << std::endl;
            return 1;
        }
    }

    return 0;
}

const sf::CircleShape& Ball::getBody() const
{
    return body;
}

} // namespace pong
