// expert c++ 10.2.2
// any type of exception throwing is possible.
// object and native types are passing through the exception.

#include <exception>
#include <iostream>
#include <string>
#include <vector>
#include <fstream>
using namespace std;

void readIntegerFile(const string& fileName, vector<int>& dest)
{
    ifstream istr;
    int temp;
    istr.open(fileName.c_str());
    if(istr.fail())
    {
	string err_msg = "Unable to open file" + fileName;
	throw err_msg;
    }
    while(istr >> temp)
    {
	dest.push_back(temp);
    }
}

int main()
{
    vector<int> myInts;
    const string fileName = "IntegerFile.txt";

    try
    {
	readIntegerFile(fileName, myInts);
    }
    catch(string e)
    {
	cerr << e << endl;
    }

    return 0;
}
