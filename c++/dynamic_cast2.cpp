#include <iostream>
#include <exception>
using namespace std;

class Base
{
public:
    Base() {}
    virtual ~Base() {}
};

class Derived : public Base
{
public:
    Derived() {}
    virtual ~Derived() {}
};

int main()
{
    Base * b;
    Derived * d = new Derived();
    b = d;
    d = dynamic_cast<Derived*>(b);

    try
    {
	Base * b1 = new Base();
	Derived * d1;

	d1 = dynamic_cast<Derived*>(b1);
	if(d1 == nullptr)
	{
	    cout << "d1 is null" << endl;
	}
	else
	{
	    cout << "d1 is not null" << endl;
	}

	cout << "==================" << endl;

	Base b2;
	Derived d2;

	Base& bb2 = b2;
	Derived& dd2 = dynamic_cast<Derived&>(bb2); // bad cast
    }
    catch(const bad_cast&)
    {
	cout << "Bad cast" << endl;
    }

    return 0;
}
