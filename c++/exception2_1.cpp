#include <iostream>
#include <fstream>
#include <vector>
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
    catch(...)
    {
	cout << "exception" << endl;
	return 1;
    }
}
