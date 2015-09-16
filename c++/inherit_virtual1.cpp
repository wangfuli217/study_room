// expert c++ 8.1.2
#include <iostream>
using namespace std;

class Super
{
public:
    Super();
    virtual void someMethod();
    void someMethod1();
protected:
    int mProtectedInt;
private:
    int mPrivateInt;
};

class Sub : public Super
{
public:
    Sub();
    virtual void someOtherMethod();
    void someMethod();   // function overriding == virtual void someMethod();
    void someMethod1();
};

Super::Super()
{
    cout << "Super constructor" << endl;
}

void Super::someMethod()
{
    cout << "Super someMethod()" << endl;
}

void Super::someMethod1()
{
    cout << "Super someMethod1()" << endl;
}

Sub::Sub()
{
    cout << "Sub constructor" << endl;
}

void Sub::someOtherMethod()
{
    cout << "someOtherMethod()" << endl;
}

void Sub::someMethod()
{
    cout << "Sub someMethod()" << endl;
}

void Sub::someMethod1()
{
    cout << "Sub someMethod1()" << endl;
}

class SubSub : public Sub
{
public:
    SubSub();
    void someMethod();
};

SubSub::SubSub()
{
    cout << "SubSub constructor" << endl;
}

void SubSub::someMethod()
{
    cout << "SubSub someMethod()" << endl;
}

int main()
{
    Super * sup1 = new Sub();
    Super * sup2 = new Super();
    Super * sup3 = new SubSub();

    cout << "=================" << endl;

    // virtual overriding
    sup1->someMethod();  // Sub's someMethod
    sup2->someMethod();  // Super's someMethodd
    sup3->someMethod();  // SubSub's someMethod

    cout << "=================" << endl;

    // overriding
    sup1->someMethod1(); // Super's someMethod
    sup2->someMethod1(); // Super's someMethod
    sup3->someMethod1(); // Super's someMethod

    return 0;
}
