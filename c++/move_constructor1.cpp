#include <iostream>
using namespace std;

class Test
{
public:
    Test();
    Test(int a, string s);
    Test(const Test& a) = default;
    Test(Test&& src);             // move constructor
    Test& operator=(Test&& src);  // move assignment operator
    const Test& operator+(const Test& src);
    int get_val() const { return val; }
    string get_str() const { return *buf; }
protected:
    int val = 0;
    string * buf = nullptr;
};

Test::Test()
{
    cout << "Test default constructor" << endl;
}

Test::Test(int a, string s) : val(a)
{
    cout << "Test(int,string) constructor" << endl;
    buf = new string(s.c_str());
}

Test::Test(Test&& src)
{
    cout << "Test move constructor" << endl;

    val = src.val;
    buf = src.buf;

    src.val = 0;
    delete src.buf;
    src.buf = nullptr;
}

Test& Test::operator=(Test&& a)
{
    cout << "Test move operator=" << endl;

    if(this == &a)
    {
	return *this;
    }

    val = a.val;
    buf = a.buf;

    a.val = 0;
    delete a.buf;
    a.buf = nullptr;

    return *this;
}

const Test& Test::operator+(const Test& src)
{
    return Test(val+src.get_val(), *buf+src.get_str());
}

int main()
{
    Test t1(10, "str_10");
    Test t2(20, "str_20");

    cout << "t1 val : " << t1.get_val() << ", str : " << t1.get_str() << endl;
    
    Test t3;
    t3 = t1 + t2;
    cout << "t1 val : " << t1.get_val() << ", str : " << t1.get_str() << endl;
    //cout << "t2 val : " << t2.get_val() << ", str : " << t2.get_str() << endl;

    return 0;
}
