#include <iostream>
#include <map>

using namespace std;

map<string,int> phone_book = {
    {"David Hume", 123456},
    {"Karl Popper", 234567},
    {"Bertrand", 3456789}
};

int get_number(const string& s)
{
    return phone_book[s];
}

int get_number1(const string& s)
{
    map<string,int>::iterator p;

    p = phone_book.find(s);
    if( p == phone_book.end() )
    {
	cout << "not found. end..." << endl;
	return 0;
    }
    else
    {
	cout << "found. : " << p->first << "," << p->second << endl;
	return p->second;;
    }
}

int main()
{
    cout << "==========================" << endl;
    int idx = get_number("Bertrand");
    cout << idx << endl;

    cout << "==========================" << endl;
    idx = get_number1("Bertrand");
    cout << idx << endl;
    idx = get_number1("xxxxxxxxxxxx");
    cout << idx << endl;
}
