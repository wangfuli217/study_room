#include <iostream>
using namespace std;

class Bird
{
public:
    virtual void fly() const = 0;
};

class Eagle : public Bird
{
public:
    virtual void fly() const;
};

class Owl : public Bird
{
public:
    virtual void fly() const;
};

void Eagle::fly() const
{
    cout << "Eagle fly..." << endl;
}

void Owl::fly() const
{
    cout << "Owl fly..." << endl;
}

int main()
{
    Bird * b1 = new Eagle();
    Bird * b2 = new Owl();

    b1->fly();
    b2->fly();
}
