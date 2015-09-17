// expert c++ 8.6.5

#include <iostream>
using namespace std;

class Super
{
public:
    Super() { cout << "Super constructor" << endl; }
    ~Super() { cout << "Super destructor" << endl; }
};

class Sub : public Super
{
public:
    Sub()
    {
	cout << "Sub constructor" << endl;
	mString = new char[30];
    }
    ~Sub()  // This destructor is not called.
    {
	cout << "Sub destructor" << endl;
	delete [] mString;
    }
protected:
    char * mString;
};

int main()
{
    Super * ptr = new Sub();

    delete ptr;

    return 0;
}
