#include <iostream>
#include <fstream>
using namespace std;

void funcOne() throw(exception);
void funcTwo() throw(exception);

int main()
{
    try
    {
	funcOne();
    }
    catch(const exception& e)
    {
	cerr << "Exception caught! line : " << __LINE__ << endl;
	return 1;
    }

    return 0;
}

void funcOne() throw(exception)
{
    string str1;
    unique_ptr<string> str2(new string());  // smart pointer

    funcTwo();
}

void funcTwo() throw(exception)
{
    ifstream istr;  // local variable
    istr.open("filename");

    throw exception();

    istr.close();  // not called, but it's not memory leak
}
