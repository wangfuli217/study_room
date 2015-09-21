#include <iostream>
using namespace std;

void getReservationData()
{
    string guestName;
    int partySize = 0;
    char ch;
    cin >> noskipws;  // no skip whitespace
    while(cin >> ch)
    {
	if(isdigit(ch))
	{
	    cin.unget();
	    if(cin.fail())
		cout << "unget() failed" << endl;
	    break;
	}
	guestName += ch;
    }
    cin >> partySize;
    cout << "Thank you '" << guestName << "', party of " << partySize << endl;
    if(partySize > 10)
    {
	cout << "An extra gratuity will apply." << endl;
    }
}

int main()
{
    getReservationData();
}
