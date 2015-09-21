#include <iostream>
#include <fstream>
using namespace std;

int main(int argc, char *argv[])
{
    // file open through stream
    ofstream outFile("test");

    // stream is okay
    if(!outFile.good())
    {
	cerr << "Error while opening output file!" << endl;
	return -1;
    }

    outFile << "There were " << argc << " arguments to this program." << endl;
    outFile << "They are : " << endl;
    for(int i=0; i<argc; i++)
    {
	outFile << argv[i] << endl;
    }

    return 0;
}
