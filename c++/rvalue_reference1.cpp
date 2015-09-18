#include <iostream>
using namespace std;

void incr(int& value)
{
    cout << "increment with lvalue reference" << endl;
    ++value;
}

#if 1
void incr(int&& value)
{
    cout << "increment with rvalue reference" << endl;
    ++value;
}
#endif

int main()
{
    int a = 10, b = 20;

    incr(a);
    incr(a + b);
}
