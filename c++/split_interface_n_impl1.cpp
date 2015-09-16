// expert c++ 7.8.1
// Test = User Interface
// TestImpl = Hidden implementation.
//            Developers can modify this class without user's recompiling.

#include <iostream>
using namespace std;

class TestImpl
{
public:
    TestImpl() { cout << "TestImpl default constructor..." << endl; }
    TestImpl(int a);
    ~TestImpl();

    int get_val() const;
    void set_val(int a);

    TestImpl& operator=(const TestImpl& a);
    TestImpl& operator+=(const TestImpl& a);
    TestImpl& operator-=(const TestImpl& a);
    TestImpl& operator*=(const TestImpl& a);
    TestImpl& operator/=(const TestImpl& a);

protected:
    int val = 0;
};

class Test
{
public:
    Test();
    //explicit Test(int a);
    Test(int a);
    ~Test();

    int get_val() const;
    void set_val(int a);

    Test& operator=(const Test& a);
    Test& operator+=(const Test& a);
    Test& operator-=(const Test& a);
    Test& operator*=(const Test& a);
    Test& operator/=(const Test& a);

private:
    TestImpl * impl;
};

TestImpl::TestImpl(int a) : val(a)
{
    cout << "TestImpl constructor for " << a << endl;
}

TestImpl::~TestImpl()
{
    cout << "TestImpl destructor..." << endl;
}

int TestImpl::get_val() const
{
    //cout << "TestImpl get_val()..." << endl;
    return val;
}

void TestImpl::set_val(int a)
{
    //cout << "TestImpl set_val()..." << endl;
    val = a;
}

TestImpl& TestImpl::operator=(const TestImpl& a)
{
    cout << "TestImpl::operator=..." << endl;

    if(this == &a)
    {
	return *this;
    }

    set_val(a.get_val());
    return *this;
}

TestImpl& TestImpl::operator+=(const TestImpl& a)
{
    set_val(get_val() + a.get_val());

    return *this;
}

TestImpl& TestImpl::operator-=(const TestImpl& a)
{
    set_val(get_val() - a.get_val());

    return *this;
}

TestImpl& TestImpl::operator*=(const TestImpl& a)
{
    set_val(get_val() * a.get_val());

    return *this;
}

TestImpl& TestImpl::operator/=(const TestImpl& a)
{
    if(a.get_val() == 0)
	throw invalid_argument("Divide by zero");

    set_val(get_val() / a.get_val());

    return *this;
}

Test::Test()
{
    cout << "Test default constructor..." << endl;
    impl = new TestImpl();
}

Test::Test(int a)
{
    cout << "Test constructor for " << a << endl;
    impl = new TestImpl(a);
}

Test::~Test()
{
    delete impl;
    cout << "Test destructor..." << endl;
}

int Test::get_val() const
{
    //cout << "Test get_val()..." << endl;
    return impl->get_val();
}

void Test::set_val(int a)
{
    //cout << "Test set_val()..." << endl;
    impl->set_val(a);
}

Test& Test::operator=(const Test& a)
{
    cout << "Test::operator=..." << endl;
    *impl = *(a.impl);
    return *this;
}

Test& Test::operator+=(const Test& a)
{
    *impl += *(a.impl);
    return *this;
}

Test& Test::operator-=(const Test& a)
{
    *impl -= *(a.impl);
    return *this;
}

Test& Test::operator*=(const Test& a)
{
    *impl *= *(a.impl);
    return *this;
}

Test& Test::operator/=(const Test& a)
{
    *impl /= *(a.impl);
    return *this;
}

int main()
{
    Test t1, t2, t3;

    cout << "====== 1 =======" << endl;
    // implicit object for 10 is constructed
    t1 = t2 = 10;
    
    cout << "====== 2 =======" << endl;
    // implicit object for 10 is constructed
    t1 += 20;   // 30

    cout << "====== 3 =======" << endl;
    // implicit object for 5 is constructed
    t1 -= 5;    // 25

    cout << "====== 4 =======" << endl;
    t1 *= t2;   // 250

    cout << "====== 5 =======" << endl;
    // implicit object for 10 is constructed
    t1 /= 25;   // 10

    cout << t1.get_val() << endl;
}
