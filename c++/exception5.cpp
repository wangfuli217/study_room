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
	throw exception();
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
    catch(const exception& e)
    {
	cerr << "Unable to open file " << fileName << endl;
	return 1;
    }

    for(size_t i=0; i<myInts.size(); i++)
    {
	cout << myInts[i] << " ";
    }

    cout << endl;

    return 0;
}
