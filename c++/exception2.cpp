#include <iostream>
#include <fstream>
#include <vector>
using namespace std;

void readIntegerFile(const string& fileName, vector<int>& dest)
{
    ifstream istr;
    int temp;

    try
    {
	istr.exceptions ( std::ifstream::failbit | std::ifstream::badbit );
	istr.open(fileName.c_str());
	while(istr >> temp)
	{
	    dest.push_back(temp);
	}
    }
    catch(std::ifstream::failure e)
    {
	throw e;
    }
    catch(exception& e)
    {
	throw e;
    }
}

int main()
{
    vector<int> myInts;
    const string fileName = "IntergerFile.txt";

    try
    {
	readIntegerFile(fileName, myInts);
	for(size_t i=0; i<myInts.size(); i++)
	{
	    cout << myInts[i] << " ";
	}
	cout << endl;
    }
    catch(std::ifstream::failure e)
    {
	cout << "ifstream exception" << endl;
	cerr << e.what() << endl;
    }
    catch(exception& e)
    {
	cout << "exception" << endl;
	cerr << e.what() << endl;
    }
}
