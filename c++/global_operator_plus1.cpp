#include <iostream>
using namespace std;

class Test
{
public:
    Test() = default;
    Test(const int i):val(i) { cout << "int constructor. : " << i << endl; }
    int get_val() const { return val; }
    Test& operator=(const Test& rhs)
    {
	cout << "operator=..." << endl;
	if(this == &rhs)
	{
	    return *this;
	}

	val = rhs.get_val();
	return *this;
    }
    void set_val(const int a) { val = a; }
private:
    int val = 0;
};

const Test operator+(const Test& lhs, const Test& rhs)
{
    cout << "operator+. : " << lhs.get_val() << " + " << rhs.get_val() << endl;
    return Test(lhs.get_val() + rhs.get_val());
}

int main()
{
    Test t1, t2(100), t3(200);

    t1 = t2 + t3;
    cout << "t1 val : " << t1.get_val() << endl;

    t1.set_val(1000);
    cout << "t1 val : " << t1.get_val() << endl;

    t1 = 300 + t2;
    cout << "t1 val : " << t1.get_val() << endl;

    t1 = t2 + 100 + t2;
    cout << "t1 val : " << t1.get_val() << endl;

    return 0;
}
