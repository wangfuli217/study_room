#include <iostream>
using namespace std;

void getReservationData()
{
    string guestName;
    int partySize;

    cout << "Name and number of guests : ";
    cin >> guestName >> partySize;
    cout << "Thank you, " << guestName << ". party size is " << partySize << endl;
    if(partySize > 10)
    {
	cout << "An extra gratuity will apply." << endl;
    }
}

int main()
{
    string userInput;
    cin >> userInput;
    cout << "User input was " << userInput << endl;

    getReservationData();
}
