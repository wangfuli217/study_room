#include <iostream>
#include <typeinfo>
using namespace std;

class Test
{
public:
    Test();
    Test(int a);
    virtual ~Test() {}
    int get_val() const { return val; }
private:
    int val = 0;
};

Test::Test()
{
    cout << "Test default constructor" << endl;
}

Test::Test(int a) : val(a)
{
    cout << "Test(int) constructor" << endl;
}

int main()
{
    Test t1(10), t2(20);

    cout << "t1 type : " << typeid(t1).name() << endl;
    cout << "t2 type : " << typeid(t2).name() << endl;

    if(typeid(t1) == typeid(t2))
    {
	cout << "t1 and t2 type is the same" << endl;
    }

    return 0;
}
