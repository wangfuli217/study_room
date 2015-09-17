// expert c++ 8.6.1.1
// Member function can be overided even though return types are different
// in case of inherited class.

#include <iostream>
using namespace std;

class Super
{
};

class Sub : public Super
{
};

class Test
{
public:
    virtual Super* aa();
};

class SubTest : public Test
{
public:
    virtual Sub* aa();
};

Super* Test::aa()
{
    Super * s = new Super();
    cout << "Test aa" << endl;

    return s;
}

Sub* SubTest::aa()
{
    Sub * s = new Sub();
    cout << "SubTest aa" << endl;

    return s;
}

int main()
{
    Test* s = new SubTest();

    s->aa();
}
