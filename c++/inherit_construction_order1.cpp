// expert c++ 8.3.1

#include <iostream>
#include <string>
using namespace std;

class MemberClass
{
public:
    MemberClass() { cout << "MemberClass" << endl; }
};

class Super
{
public:
    Super() { cout << "Super constructor" << endl; }
};

class Sub : public Super
{
public:
    Sub() { cout << "Sub constructor" << endl; }
protected:
    MemberClass sub_member;
};

int main()
{
    Sub sb;
}
