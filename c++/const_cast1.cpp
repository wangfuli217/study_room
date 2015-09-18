#include <iostream>
using namespace std;

int main()
{
    int x = 10;
    const int& rx = x;

    // rx = 20; // compile error
    const_cast<int&>(rx) = 20;
    cout << x << endl;

    return 0;
}
