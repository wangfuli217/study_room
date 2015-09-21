#include <iostream>
#include <string>
#include <bitset>
using namespace std;

int main()
{
    bitset<300> foo;
    bitset<300> bar(0xfa2);
    bitset<300> baz(string("0101111001"));

    cout << "foo : " << foo << endl;
    cout << "bar : " << bar << endl;
    cout << "baz : " << baz << endl;

    return 0;
}
