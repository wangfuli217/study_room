#include <iostream>
using namespace std;

class parent
{
protected:
    int val;

public:
    void set_value(int v) { val = v; }
    int get_value() const { return val; }
};

class child: public parent
{
    int val_child;
public:
    void set_value(int v) { val = v; }
};

int main()
{
    child c;

    c.set_value(10);
    cout << c.get_value() << endl;
    cout << c.val << endl;

    return 0;
}
