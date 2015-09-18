#include <iostream>
using namespace std;

struct CircleStruct
{
    int x, y;
    double radius;
    int get_x() const { return x; }
    int get_y() const { return y; }
    double get_radius() const { return radius; }
};

class CircleClass
{
public:
    CircleClass(int x, int y, double radius)
	: mX(x), mY(y), mRadius(radius) {}
    int get_x() const { return mX; }
    int get_y() const { return mY; }
    double get_radius() const { return mRadius; }
private:
    int mX, mY;
    double mRadius;
};

int main()
{
    CircleStruct myCircle1 = { 10, 10, 2.5 };
    CircleClass myCircle2 = { 10, 10, 2.5 };

    cout << myCircle1.get_x() << endl;
    cout << myCircle2.get_x() << endl;

    CircleStruct myCircle11{ 110, 110, 12.5 };
    CircleClass myCircle22 { 110, 110, 12.5 };

    cout << myCircle11.get_x() << endl;
    cout << myCircle22.get_x() << endl;

    //CircleStruct myCircle3(10, 10, 2.5);  // compile error
    CircleClass myCircle4(40, 40, 4.5);
    cout << myCircle4.get_x() << endl;
}
