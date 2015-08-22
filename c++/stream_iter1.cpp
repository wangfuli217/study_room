#include <iostream>

using namespace std;

int main()
{
    ostream_iterator<string> oo {cout};

    *oo = "hello,";
    ++oo;
    *oo = "world!\n";
}
