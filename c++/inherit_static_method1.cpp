// expert c++ 8.6.3.1
#include <iostream>
using namespace std;

class SuperStatic
{
public:
    static void beStatic()
    {
	cout << "SuperStatic being static." << endl;
    }
};

class SubStatic : public SuperStatic
{
public:
    static void beStatic()
    {
	cout << "SubStatic keeping it static." << endl;
    }
};

int main()
{
    SuperStatic::beStatic();
    SubStatic::beStatic();
}
