// effective c++ item 9
// Basic class constructor must not call virtual function.
// This code causes compile error.

#include <iostream>
using namespace std;

class Basic
{
public:
    Basic();
    virtual void log_write() const = 0;
};

Basic::Basic()
{
    log_write();  // compile error - called pure virtual function
}

class Derived1 : public Basic
{
public:
    Derived1() { cout << "Derived1 constructor..." << endl; }
    virtual void log_write() const;
};

void Derived1::log_write() const
{
    cout << "Derived1::log_write()" << endl;
}

int main()
{
    Derived1  d;
}
