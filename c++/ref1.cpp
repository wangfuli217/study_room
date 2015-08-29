#include <iostream>
#include <string>

using namespace std;

int main()
{
    string s1("Nancy");
    string s2("Clancy");
    cout << "s1 : " << s1 << ", s2 : " << s2 << endl;

    string& rs = s1;
    string *ps = &s1;

    cout << "s1 : " << s1 << ", s2 : " << s2 << endl;

    rs = s2;  // change value of s1 to s2's
    cout << "s1 : " << s1 << ", s2 : " << s2 << ", rs : " << rs << endl;
    cout << "s1 : " << s1 << ", s2 : " << s2 << ", ps : " << *ps << endl;

    ps = &s2; // no change of s1's value
    cout << "s1 : " << s1 << ", s2 : " << s2 << ", ps : " << *ps << endl;
}
