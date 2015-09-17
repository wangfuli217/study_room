// expert c++ 8.3.4

#include <iostream>
#include <exception>
using namespace std;

class Test
{
public:
    virtual int get_val() const
    {
	cout << "call Test virtual get_val()" << endl;
	return 0;
    }
};

class SubTest : public Test
{
public:
    SubTest() = default;
    SubTest(int a) : val(a) {}
    virtual int get_val() const { return val; }
protected:
    int val;
};

int main()
{
    try
    {
	SubTest s(10);
	Test& t = s;   // upcastring okay

	cout << t.get_val() << endl;

	Test * sup1 = new Test();

#if 0
	// This is not a normal casting so nullptr is returned.
	SubTest * sub1 = dynamic_cast<SubTest*>(sup1);
	if(sub1 == nullptr)
	{
	    cout << "dynamic casted ptr is null" << endl;
	    return 0;
	}
	cout << sub1->get_val() << endl;
#else
	// This is not a normal casting so exeception is raised.
	SubTest& ref1 = dynamic_cast<SubTest&>(*sup1);
	cout << ref1.get_val() << endl;
#endif
    }
    catch(exception e)
    {
	cout << "exception occured : " << e.what() << endl;
    }

    return 0;
}
