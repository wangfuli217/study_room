#include <iostream>
using namespace std;

class Test
{
public:
    Test();
    Test(int a);
    const Test operator+(const Test& a);
    const Test& operator=(const Test& a);
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

const Test Test::operator+(const Test& a)
{
    cout << "Test operator+" << endl;

    return Test(val + a.val);  // temporary constructor
}

const Test& Test::operator=(const Test& a)
{
    cout << "Test operator=" << endl;

    if(this == &a)
    {
	return *this;
    }

    val = a.val;

    return *this;
}

int main()
{
    Test t1(10), t2(20);
    Test t3;

    t3 = t1 + t2;
    cout << "t3.val : " << t3.get_val() << endl;

    return 0;
}
