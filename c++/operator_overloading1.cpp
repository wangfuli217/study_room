#include <iostream>
using namespace std;

class Test
{
public:
    Test()  = default;
    Test(int a):val(a) {}
    const Test operator+(const Test& a);
    const Test& operator=(const Test& a);
    const int get_val() { return val; }

private:
    int val = 0;
};

const Test Test::operator+(const Test& a)
{
    Test t;

    cout << "operator+ called" << endl;

    t.val = val + a.val;

    return t;
}

Test& Test::operator=(const Test& a)
{
    cout << "operator= called" << endl;

    if(this == &a)
    {
	return *this;
    }

    val = a.val;

    return *this;
}

int main()
{
    Test a(5), b(10);
    Test c;

    c = a + b;

    cout << c.get_val() << endl;
}

