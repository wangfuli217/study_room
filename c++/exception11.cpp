#include <iostream>
#include <vector>
#include <string>
#include <fstream>
using namespace std;

void readIntegerFile(const string& fileName, vector<int>& dest)
    throw(invalid_argument,runtime_error)
{
    ifstream istr;
    int temp;
    istr.open(fileName.c_str());
    if(istr.fail())
    {
	string error = "Unable to open file " + fileName;
	throw invalid_argument(error);
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
	string error = "Unable to read file " + fileName;
	throw runtime_error(error);
    }
}

int main()
{
    const string fileName = "xxxxx.txt";
    vector<int> myInts;

    try
    {
	readIntegerFile(fileName, myInts);
    }
    catch(const invalid_argument& e)
    {
	cerr << e.what() << endl;
	return 1;
    }
    catch(const runtime_error& e)
    {
	cerr << e.what() << endl;
	return 1;
    }

    return 0;
}
