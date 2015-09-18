// http://stackoverflow.com/questions/12953127/what-are-copy-elision-and-return-value-optimization

#include<iostream>
using namespace std;

class ABC
{
public:
    const char *a;
    ABC()
	{ cout << "default constructor" << endl; }
    ABC(int a) : val(a)
	{ cout << "int constructor : "<< a << endl; }
    ABC(const char *ptr)
	{ cout << "constructor(const char*) : " << *ptr << endl; }
    ABC(ABC &obj)
	{
	    cout << "copy constructor : " << obj.get_val() << endl;
	    val = obj.get_val();
	}
    ABC(ABC&& obj)
	{
	    cout << "move constructor : " << obj.get_val() << endl;
	    val = obj.get_val();
	}
    ~ABC()
	{ cout << "destructor : " << val << endl; }
    int get_val() const { return val; }
protected:
    int val = 0;
};

ABC fun123()
{
    cout << "func123" << endl;

    // default constructor
    ABC obj(22);

    // move local obj -> temp obj
    // local obj destruction
    return obj;
}

ABC xyz123()
{
    cout << "xyz123" << endl;

    // temporary default constructor
    return ABC(33);
}

int main()
{
    // move temp obj -> obj1
    // temp obj destruction
    ABC obj1(fun123()); // NRVO
    cout << "===> obj1.val : " << obj1.get_val() << endl;
    
    ABC obj2(xyz123()); // NRVO
    cout << "===> obj2.val : " << obj2.get_val() << endl;

    ABC xyz = "Stack Overflow"; // RVO
    return 0;
}
