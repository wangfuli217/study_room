// expert c++ 8.6.3.2

#include <iostream>
using namespace std;

class Super
{
public:
    virtual void overload() { cout << "Super's overload()" << endl; }
    virtual void overload(int i)
    {
	cout << "Super's overload(int i)" << endl;
    }
};

class Sub : public Super
{
public:
    virtual void overload() { cout << "Sub's overload()" << endl; }

    // no overriding for void overload(int i)
};

int main()
{
#if 0
    Sub s;
    s.overload(2);  // compile error
#else
    Sub s;
    Super * ptr = &s;
    ptr->overload(7);
#endif

    return 0;
}
