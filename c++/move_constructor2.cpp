#include <iostream>
#include <string>
using namespace std;

class Example6
{
    string * ptr;
public:
    Example6(const string& str) : ptr(new string(str))
    {
	cout << "Example6(" << str << ") constructor" << endl;
    }
    ~Example6() { delete ptr; }

    // move constructor
    Example6(Example6&& x) : ptr(x.ptr)
    {
	cout << "Example6 move constructor" << endl;
	x.ptr = nullptr;
    }

    // move assignment
    Example6& operator=(Example6&& x)
    {
	cout << "Example6 move operator=" << endl;
	delete ptr;
	ptr = x.ptr;
	x.ptr = nullptr;
	return *this;
    }

    // access content
    const string& content() const { return *ptr; }

    // addition
    Example6 operator+(const Example6& rhs)
    {
	cout << "Example6 operator+" << endl;
	return Example6(content() + rhs.content());
    }
};

int main()
{
    Example6 foo("Exam");
    Example6 bar = Example6("ple");  // -> move constructor ??

    foo = foo + bar;    // move assignment

    cout << "foo's content : " << foo.content() << '\n';

    return 0;
}
