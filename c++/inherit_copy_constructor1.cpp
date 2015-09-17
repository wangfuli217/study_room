// expert c++ 8.6.4

#include <iostream>
using namespace std;

class Super
{
public:
    Super() { cout << "Super default constructor" << endl; }
    Super(const Super& inSuper);
};

class Sub : public Super
{
public:
    Sub() { cout << "Sub default constructor" << endl; }
    Sub(const Sub& inSub);
};

Super::Super(const Super& inSuper)
{
    cout << "Super copy constructor" << endl;
}

//Sub::Sub(const Sub& inSub) : Super(inSub)    // before body call Super copy constructor
Sub::Sub(const Sub& inSub)   // before body call Super default constructor
{
    cout << "Sub copy constructor" << endl;
}

int main()
{
    Sub s;
    cout << "====================" << endl;

    Sub s1(s);
}
