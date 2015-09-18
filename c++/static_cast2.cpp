#include <iostream>
using namespace std;

class Base
{
public:
    Base() {}
    virtual ~Base() {}
    virtual void aa() { cout << "Base aa()" << endl; }
};

class Derived : public Base
{
public:
    Derived() {}
    virtual ~Derived() {}
    virtual void aa() { cout << "Derived aa()" << endl; }
};

int main()
{
    Base * b;
    Derived * d = new Derived();

    b = d;
    b->aa();
    d->aa();
    
    d = static_cast<Derived*>(b);
    b->aa();
    d->aa();

    cout << "================" << endl;

    Base base;
    Derived derived;

    Base& br = derived;
    br.aa();
    
    Derived& dr = static_cast<Derived&>(br);
    dr.aa();

    return 0;
}
