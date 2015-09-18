#include <iostream>
using namespace std;

class Thing
{
public:
    Thing() { cout << "Thing()" << endl; }
    Thing(int a) { cout << "Thing(int)" << endl; val = a; }
    ~Thing() { cout << "~Thing()" << endl; }
    Thing(const Thing&) { cout << "Thing(Thing&)" << endl; }
    Thing(Thing&&) { cout << "Thing(Thing&&) move constructor" << endl; }
    Thing& operator=(Thing&&) { cout << "move assignment" << endl; return *this; }
    int get_val() const { return val; }
protected:
    int val = 0;
};

Thing f()
{
    Thing t(10);

    cout << "here" << endl;

    // move local obj -> temp obj
    // local obj destruction
    return t;
}

int main()
{
    // move temp obj -> to t2
    // temp obj destruction
    Thing t2 = f();

    cout << "t2.val : " << t2.get_val() << endl;

    return 0;
}
