// expert c++ 8.6.1.2

#include <iostream>
using namespace std;

class Test
{
public:
    virtual void aa();         // overrided by SubTest::aa(int)
    //virtual void aa() override;  // compile error
};

class SubTest : public Test
{
public:
    virtual void aa(int a);
};

void Test::aa()
{
    cout << "Test::aa()" << endl;
}

void SubTest::aa(int a)
{
    cout << "SubTest::aa()" << endl;
}

int main()
{
    Test* s = new SubTest();

    s->aa();
}
