// expert c++ 10.5.3

#include <iostream>
using namespace std;

class SubObject
{
public:
    SubObject(int i) throw(runtime_error);
};

SubObject::SubObject(int i) throw(runtime_error)
{
    // original throwing here
    throw runtime_error("Exception by SubObject ctor");
}

class MyClass
{
public:
    MyClass() throw(runtime_error);
protected:
    SubObject mSubObject;
};

// try block in constructor - catch exception of initialize list
MyClass::MyClass() throw(runtime_error)
try
    : mSubObject(42)  // original throwing occurs here
{
    cout << "MyClass constructor" << endl;
}
catch(const exception& e)
{
    cout << "function-try-block caught : (" << e.what() << ")" << endl;
}

int main()
{
    try
    {
	MyClass m;
    }
    catch(const exception& e)
    {
	cout << "main() caught : (" << e.what() << ")" << endl;
    }
    return 0;
}
