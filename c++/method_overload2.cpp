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

    // use Super's other method
    using Super::overload;
};

int main()
{
#if 1
    Sub s;
    s.overload(2);  // okay - use Super's overload(int)
#else
    Sub s;
    Super * ptr = &s;
    ptr->overload(7);
#endif

    return 0;
}
