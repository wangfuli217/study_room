#include <iostream>
using namespace std;

class Test
{
public:
    Test() { cout << "Test constructor" << endl; }
    Test(const Test& a) { cout << "Test copy constructor" << endl; val = a.val; }
    int get_val() const { return val; }
    void set_val(int a) { val = a; }
private:
    int val = 10;
};

void func1(Test a)  // call Test copy constructor
{
    cout << "func1 : " << a.get_val() << endl;
    a.set_val(100);
}

void func2(Test& a)
{
    cout << "func2 : " << a.get_val() << endl;
    a.set_val(100);
}

int main()
{
    Test t;

    cout << "==================" << endl;

    func1(t);
    cout << "after func1 : " << t.get_val() << endl;
    
    func2(t);
    cout << "after func2 : " << t.get_val() << endl;
}
