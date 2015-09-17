// expert c++ 8.6.2

#include <iostream>
using namespace std;

class Super
{
public:
    Super() = default;
    Super(const string& s);
    Super(float f);
protected:
    string str;
};

class Sub : public Super
{
public:
    using Super::Super;
    Sub() = default;
    Sub(float f);
protected:
    int val;
};

Super::Super(const string& s)
{
    cout << "Super constructor : " << s << endl;
    str = s;
}

Super::Super(float f)
{
    cout << "Super float constructor : " << f << endl;
}

Sub::Sub(float f)
{
    cout << "Sub float constructor : " << f << endl;
}

int main()
{
    Super super1("Super");
    Sub   sub1("Sub");
    Sub   sub2(10.2);

    return 0;
}
