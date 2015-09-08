#include <iostream>
#include <string>
using namespace std;

int main()
{
    string t("ABC");

    string s1("Hello!");
    string s2("Hello!");
    string s3("Hello!");
    string s4("Hello!");
    string s5("Hello!");
    string s6("Hello!");
    string s7("Hello!");
    string s8("Hello!");
    string s9("Hello!");

    s1.insert(1, "ABC");
    s2.insert(1, "ABC", 2);
    s3.insert(1, t);
    s4.insert(1, t, 0, 2);
    s5.insert(1, 3, 'A');

    //s6.insert(s6.begin()+1);
    s7.insert(s7.begin()+1, 'A');
    s8.insert(s8.begin()+1, 3, 'A');
    s9.insert(s9.begin()+1, t.begin(), t.end());

    cout << "s1 : " << s1 << endl;
    cout << "s2 : " << s2 << endl;
    cout << "s3 : " << s3 << endl;
    cout << "s4 : " << s4 << endl;
    cout << "s5 : " << s5 << endl;
    cout << "s6 : " << s6 << endl;
    cout << "s7 : " << s7 << endl;
    cout << "s8 : " << s8 << endl;
    cout << "s9 : " << s9 << endl;

    return 0;
}
