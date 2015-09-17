#include <iostream>
using namespace std;

class Super
{
public:
    Super() = default;
    Super(const string& s);
protected:
    string str;
};

class Sub : public Super
{
public:
    using Super::Super;
    Sub() = default;
    Sub(int a);
protected:
    int val;
};

Super::Super(const string& s)
{
    cout << "Super constructor : " << s << endl;
    str = s;
}

Sub::Sub(int a)
{
    cout << "Sub constructor : " << a << endl;
    val = a;
}

int main()
{
    Super super1("Super");
    Sub   sub1(10);
    Sub   sub2("Sub");

    return 0;
}
