#include <iostream>
using namespace std;

class A
{
public:
    A() { cout << "A constructor" << endl; }
};

class B
{
public:
    B() { cout << "B constructor" << endl; }
};

void func()
{
    cout << "func()" << endl;
}

void f(const B& b, const A& a, void (*f)())
{
    f();
    cout << "f()" << endl;
}

int main()
{
    A a;
    B b;

    f(b, a, func);
}









