// expert c++ 8.3.2

#include <iostream>
using namespace std;

class Something
{
public:
    Something() { cout << "2" << endl; }
    virtual ~Something() { cout << "2_d" << endl; }
};

class Parent
{
public:
    Parent() { cout << "1" << endl; }
    ~Parent() { cout << "1_d" << endl; }  // no virtual destructor -> never do like this
};

class Child : public Parent
{
public:
    Child() { cout << "3" << endl; }
    ~Child() { cout << "3_d" << endl; }
protected:
    Something mDataMember;
};

int main()
{
    Parent * p = new Child();

    delete p;  // 3_d, 2_d are not called -> critical

    return 0;
}
