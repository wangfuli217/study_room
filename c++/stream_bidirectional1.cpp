#include <iostream>
#include <fstream>
using namespace std;

bool changeNumberForID(const string& inFileName, int inID, const string& inNewNumber)
{
    fstream ioData(inFileName.c_str());
    if(!ioData)
    {
	cerr << "Error while opening file " << inFileName << endl;
	return false;
    }

    while(ioData.good())
    {
	int id;
	string number;
	ioData >> id;
	if(id == inID)
	{
	    ioData.seekp(ioData.tellg());  // current position
	    ioData << " " << inNewNumber;
	    break;
	}

	ioData >> number;

	cout << id << ", " << number << endl;
    }

    return true;
}

int main()
{
    string filename = "numbers.txt";
    int id = 1000;
    string new_num = "7777";

    if( changeNumberForID(filename, id, new_num) )
    {
	cout << "change okay..." << endl;
    }
    else
    {
	cout << "change fail..." << endl;
    }
}
