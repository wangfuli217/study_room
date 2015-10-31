#include <random>
#include <Variables.h>

float calBallAngle()
{
    float ballAngle = 0.f;
    std::random_device rd;

    do
    {
        // Make sure the ball initial angle is not too much horizontal or vertical
        ballAngle = (rd() % 180) * 2 * pi / 360;
    }
    while (std::abs(std::cos(ballAngle)) > 0.7f || std::abs(std::cos(ballAngle)) < 0.3f);

    return ballAngle;
}
