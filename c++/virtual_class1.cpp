// 순수가상함수와 일반가상함수, 비가상 함수의 차이

#include <iostream>
using namespace std;

class Shape
{
public:
    virtual void draw() const = 0;
    virtual void error(const std::string msg);
    int objectID() const;
};

void Shape::error(const std::string msg)
{
    cerr << "error msg : " << msg << endl;
}

class Rectangle:public Shape
{
public:
    void draw() const { cout << "Rectangle draw..." << endl; }
};

class Ellipse:public Shape
{
public:
    void draw() const { cout << "Ellipse draw..." << endl; }
};


int main()
{
    // Shape *ps = new Shape;

    Shape *ps1 = new Rectangle;
    ps1->draw();
    ps1->error("p1 error");

    Shape *ps2 = new Ellipse;
    ps2->draw();
    ps2->error("p2 error");

    return 0;
}
