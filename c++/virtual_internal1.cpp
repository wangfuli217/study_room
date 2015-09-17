// expert c++ 8.6.5.2
#include <iostream>
using namespace std;

class Super
{
public:
    virtual void func1() { cout << "Super func1" << endl; }
    virtual void func2() { cout << "Super func2" << endl; }
};

class Sub : public Super
{
public:
    virtual void func2() { cout << "Sub func2" << endl; }
};

int main()
{
    Super mySuper;

    mySuper.func1();
    mySuper.func2();

    cout << "===============" << endl;
    
    Sub mySub;

    mySub.func1();
    mySub.func2();

    cout << "===============" << endl;

    Super * s = new Super();

    s->func1();
    s->func2();

    cout << "===============" << endl;

    Super * s1 = new Sub();

    s1->func1();
    s1->func2();
}
