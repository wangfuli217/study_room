#include <iostream>
using namespace std;

class Test
{
public:
    Test() : val(77) {}
    int get_val() const;
private:
    int val;
};

int Test::get_val() const
{
    int len = 0;

    *this >> len;   // compile error

    cout >> "len : " << len << endl;
    
    return val;
}

int main()
{
    Test t;

    cout << "get_val : " << t.get_val() << endl;
}
