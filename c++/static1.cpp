#include <iostream>
using namespace std;

class Test
{
public:
    int get_val() const { return a; }
private:
    static int a;
};

int Test::a = 3;

int main()
{
    Test t;

    cout << t.get_val() << endl;
}
