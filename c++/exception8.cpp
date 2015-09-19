#include <iostream>
#include <string>
using namespace std;

class myException
{
public:
    myException(const string& s) : err_msg(s) {}
    string get_err_msg() const { return err_msg; }
private:
    string err_msg;
};

int main()
{
    int a = 0;

    try
    {
	if(a == 0)
	{
	    string s("a == 0 error");
	    myException e(s);
	    throw e;
	}
    }
    catch(const myException& e)
    {
	cout << "exception : " << e.get_err_msg() << endl;
    }
}
