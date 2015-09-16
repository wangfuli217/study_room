// effective c++ item 10
#include <iostream>
using namespace std;

class Test
{
public:
    Test() {}
    Test(int a);
    Test& operator=(const Test& a);
    int get_val() const { return val; }

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

    val = a.val;
    return *this;
}

int main()
{
    Test t1, t2, t3;

    t1 = 10;
    cout << "after constructor..." << endl;

    t1 = t2 = t3 = t1;
    cout << t1.get_val() << ", " << t2.get_val() << ", " << t3.get_val() << endl;
}
