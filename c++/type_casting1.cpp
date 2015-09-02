#include <iostream>
using namespace std;

class A
{
};

class B
{
public:
    B() { cout << "B() constructor" << endl; }
    B(A& _a) { cout << "B(A _a) constructor" << endl; }
    B(int n) { cout << "B(int n) constructor" << endl; }
    B(double d) { cout << "B(double d) constructor" << endl; }
};

int main()
{
    A a;
    int n = 10;
    double d = 5.5;
    B b;
    b = a;
    b = n;
    b = d;

    return 0;
}
