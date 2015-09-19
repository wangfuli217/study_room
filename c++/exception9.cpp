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

int main()
{
    string fileName = "ttt.txt";
    vector<int> myInts;

    try
    {
	readIntegerFile(fileName, myInts);
    }
    catch(const invalid_argument& e)
    {
	cerr << "Unable to open file " << fileName << endl;
	return 1;
    }
    catch(const runtime_error& e)
    {
	cerr << "Error reading file " << fileName << endl;
	return 1;
    }
}
