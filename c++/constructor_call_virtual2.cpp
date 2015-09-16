// effective c++ item 9
// Basic class constructor must not call virtual function.
// compile ok, but abortion occurs because of calling the pure virtual function

#include <iostream>
using namespace std;

class Basic
{
public:
    Basic()
    {
	init();
    }
    virtual void log_write() const = 0;
private:
    void init()
    {
	log_write();  // abortion
    }
};

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
