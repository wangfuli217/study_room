#include <iostream>
using namespace std;

string readName(istream& inStream)
{
    string name;
    while(inStream.good())
    {
	int next = inStream.get();
	if(next == '\n')
	    break;
	name += next;
    }
    return name;
}

int main()
{
    string name = readName(cin);
    cout << name << endl;
}
