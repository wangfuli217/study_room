// expert c++ 10.2.4

#include <stdexcept>
#include <iostream>
#include <vector>
#include <string>
#include <fstream>
using namespace std;

void readIntegerFile(const string& fileName, vector<int>& dest)
{
    ifstream istr;
    int temp;
    istr.open(fileName.c_str());
    if(istr.fail())
    {
	throw invalid_argument("");
    }

    while(istr >> temp)
    {
	dest.push_back(temp);
    }

    if(istr.eof())
    {
	istr.close();
    }
    else
    {
	istr.close();
	throw runtime_error("");
    }
}

void myTerminate()
{
    cout << "Uncaught exception" << endl;
    exit(1);
}

int main()
{
    vector<int> myInts;
    const string fileName = "IntegerFile.txt";

    // set terminate handler
    set_terminate(myTerminate);

    // throw exception
    readIntegerFile(fileName, myInts);

    for(size_t i=0; i<myInts.size(); i++)
    {
	cout << myInts[i] << " ";
    }
    cout << endl;
    return 0;
}
