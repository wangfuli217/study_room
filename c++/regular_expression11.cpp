#include <iostream>
#include <string>
#include <regex>

using namespace std;

int main()
{
    string s("this subject has a submarine as a subsequence");
    regex e("\\b(sub)([^ ]*)");

    regex_token_iterator<string::iterator> rend;

    cout << "entire matches : ";
    regex_token_iterator<string::iterator> a(s.begin(), s.end(), e);
    while(a!=rend) cout << " [" << *a++ << "]";
    cout << endl;

    cout << "2nd submatches : ";
    regex_token_iterator<string::iterator> b(s.begin(), s.end(), e, 2);
    while(b!=rend) cout << " [" << *b++ << "]";
    cout << endl;

    cout << "1st and 2nd submatches : ";
    int submatches[] = {1,2};
    regex_token_iterator<string::iterator> c(s.begin(), s.end(), e, submatches);
    while(c!=rend) cout << " [" << *c++ << "]";
    cout << endl;

    cout << "matches as splitters : ";
    regex_token_iterator<string::iterator> d(s.begin(), s.end(), e, -1);
    while(d!=rend) cout << " [" << *d++ << "]";
    cout << endl;

    return 0;
}
