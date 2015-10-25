#include <AttackPaddle.h>

AttackPaddle::~AttackPaddle()
{
}

// calculate first top-left position of paddle
AttackPaddle::AttackPaddle(const sf::Vector2f& size)
    : Paddle(size, {plateWidth/2-size.x/2, plateHeight-size.y}), bulletKey(0)
{
    //body.setFillColor(sf::Color(204,204,204));
    body.setFillColor(sf::Color(255,255,255));
    firstPos = {plateWidth/2-size.x/2, plateHeight-size.y};
}

void AttackPaddle::moveBody()
{
    if(sf::Keyboard::isKeyPressed(sf::Keyboard::Key::Left))
    {
        if(LeftX() > 0 )
        {
            body.move(-8.f,0.f);
        }
    }

    if(sf::Keyboard::isKeyPressed(sf::Keyboard::Key::Right))
    {
        if(RightX() < plateWidth )
        {
            body.move(8.f,0.f);
        }
    }
}

void AttackPaddle::drawBody(sf::RenderWindow& w)
{
    w.draw(body);
}

void AttackPaddle::resetPos()
{
    body.setPosition(firstPos);
}

void AttackPaddle::shootBullet() throw()
{
    sf::Vector2f bulletSize = {10,10};
    std::pair<int,std::shared_ptr<Bullet>> newElem;

    try
    {
        // Spacebar 를 한번 누르면 insert 가 다수 되기 때문에
        // 시간을 계산해서 일정시간 내에 많이 눌렸어도 한번으로
        // 계산하도록 해야 한다.
        if(sf::Keyboard::isKeyPressed(sf::Keyboard::Key::Space))
        {
            sf::Time t = clock.getElapsedTime();

            if( t.asMilliseconds() > 100 )
            {
                std::shared_ptr<Bullet> newBullet(new Bullet(bulletSize,Center()));
                newElem = std::make_pair(++bulletKey,newBullet);

                bullets.insert(newElem);

                clock.restart();
            }
        }
    }
    catch(std::bad_alloc& e)
    {
        std::cerr << "bullet mem alloc fail." << std::endl;
    }
}

void AttackPaddle::moveBullets()
{
    for(auto i : bullets)
    {
        (i.second)->getBody().move({0.f, -8.f});
    }
}

void AttackPaddle::drawBullets(sf::RenderWindow& w)
{
    for(auto i : bullets)
    {
        w.draw((i.second)->getBody());
    }
}

void AttackPaddle::clearBullets()
{
    bullets.clear();
}
