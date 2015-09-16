#include <iostream>
using namespace std;

class Test
{
public:
    Test() {}
    //explicit Test(int a);
    Test(int a);
    Test& operator=(const Test& a);
    int get_val() const { return val; }
    void set_val(int a) { val = a; }

    // compound assignment
    Test& operator+=(const Test& a);
    Test& operator-=(const Test& a);
    Test& operator*=(const Test& a);
    Test& operator/=(const Test& a);

private:
    int val = 0;
};

Test::Test(int a) : val(a)
{
    cout << "constructor..." << endl;
}

Test& Test::operator=(const Test& a)
{
    if(this == &a)
    {
	return *this;
    }

    set_val(a.val);
    return *this;
}

Test& Test::operator+=(const Test& a)
{
    set_val(get_val() + a.get_val());

    return *this;
}

Test& Test::operator-=(const Test& a)
{
    set_val(get_val() - a.get_val());

    return *this;
}

Test& Test::operator*=(const Test& a)
{
    set_val(get_val() * a.get_val());

    return *this;
}

Test& Test::operator/=(const Test& a)
{
    if(a.get_val() == 0)
	throw invalid_argument("Divide by zero");

    set_val(get_val() / a.get_val());

    return *this;
}

int main()
{
    Test t1, t2, t3;

    t1 = t2 = 10;
    t1 += 10;   // 20
    t1 -= 5;    // 15
    t1 *= t2;   // 150
    t1 /= 10;   // 15

    cout << t1.get_val() << endl;
}
