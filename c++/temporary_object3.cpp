// This is for temporary object test, but too complicated.

#include <iostream>
using namespace std;

class Test
{
public:
    Test() { cout << "Test default constructor" << endl; }
    Test(int a) : val(a) { cout << "Test(int) constructor" << endl; }
    Test(const Test& a) { cout << "Test copy constructor" << endl; }
    const Test operator+(const Test& a);
    Test& operator=(const Test& a);
    int get_val() const { return val; }

private:
    int val;
};

class myTest
{
public:
    myTest() { cout << "myTest default constructor" << endl; }
    myTest(const Test& a) : v(a) { cout << "myTest(Test&) constructor" << endl; }
    const myTest operator+(const myTest& a);
    myTest& operator=(const myTest& a);
    int get_val() const { return v.get_val(); }

protected:
    Test v;
};

const Test Test::operator+(const Test& a)
{
    cout << "Test operator+" << endl;
    return Test(val + a.val);
}

Test& Test::operator=(const Test& a)
{
    cout << "Test operator=" << endl;
    if( this == &a )
    {
	return *this;
    }

    val = a.val;
    return *this;
}

const myTest myTest::operator+(const myTest& a)
{
    cout << "myTest operator+" << endl;

    return myTest(v + a.v);
}

myTest& myTest::operator=(const myTest& a)
{
    cout << "myTest operator=" << endl;

    if( this == &a )
    {
	return *this;
    }

    v = a.v;
    return *this;
}

int main()
{
    Test a(10), b(20);

    cout << "=========================" << endl;

    myTest ma(a);

    cout << "=========================" << endl;

    myTest mb(b);

    cout << "=========================" << endl;

    myTest total;

    cout << "=========================" << endl;

    total = ma + mb;

    cout << "=========================" << endl;

    cout << total.get_val() << endl;
}
