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
	throw 5;
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
    catch(int e)
    {
	cerr << "Unable to open file " << fileName << ", throw " << e << endl;
	return 1;
    }

    return 0;
}
