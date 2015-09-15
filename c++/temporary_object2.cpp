#include <iostream>
#include <string>
using namespace std;

class String
{
public:
    String() = default;
    String(const char * a):str(a)
    {
	cout << "temporary object creation..." << endl;
    }
    void set_string(const string a)
    {
	str = a;
    }
    ~String()
    {
	cout << "temporary object deletion..." << endl;
    }
private:
    string str;
};

// void test_func(String& a)
// {
// }

void test_func(const String& a)
{
    //a.set_string("modify");
}

int main()
{
    char xx[] = "effective c++";

    test_func(xx);
}
