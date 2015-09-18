#include <iostream>
using namespace std;

typedef int* t_intptr;
using u_intptr = int*;

int main()
{
    int  x = 10, y = 20;
    t_intptr a = &x;
    u_intptr b = &y;

    cout << *a << ", " << *b << endl;
}
