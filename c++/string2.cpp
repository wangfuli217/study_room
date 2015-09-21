#include <iostream>
#include <string>
using namespace std;

int main()
{
    string myString = "hello";
    myString += ", there";
    string myOtherString = myString;

    if(myString == myOtherString)
    {
	myOtherString[0] = 'H';
    }

    cout << myString << endl;
    cout << myOtherString << endl;

    return 0;
}
