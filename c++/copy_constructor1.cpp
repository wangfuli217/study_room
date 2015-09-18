#include <iostream>
using namespace std;

struct C {
    C() { cout << "function object" << endl; }
    C(const C&) { cout << "A copy was made.\n"; }
    C(const C&&) { cout << "A move was made.\n"; }
    C operator=(const C& a) { cout << "operator=" << endl; val = a.val; }
private:
    int val;
};

C f()
{
    return C();
}

int main()
{
    cout << "Hello World!\n";
    C obj = f();
}
