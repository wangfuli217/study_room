#include <iostream>
using namespace std;

class Parent
{
protected:
    enum
    {
        AA,
        BB,
        Last
    };
};

class Child : public Parent
{
public:
    enum
    {
        CC = Parent::Last,
        DD,
        EE
    };
};

int main()
{
    Child C;

    cout << C.CC << endl;
    cout << C.DD << endl;
    cout << C.EE << endl;
}
