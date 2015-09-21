#include <iostream>
using namespace std;

string readName(istream& inStream)
{
    string name;
    char next;

    while(inStream.get(next))
    {
	name += next;
    }
    return name;
}

int main()
{
    string name = readName(cin);
    cout << name << endl;
}
