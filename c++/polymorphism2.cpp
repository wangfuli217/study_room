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
    Bird * b[3];

    b[0] = new Eagle();
    b[1] = new Eagle();
    b[2] = new Owl();

    b[0]->fly();
    b[1]->fly();
    b[2]->fly();

    return 0;
}
