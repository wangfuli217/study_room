#include <iostream>
using namespace std;

class TestClass
{
public:
    TestClass() { cout << "default const..." << endl; }
};

int main()
{
    TestClass tt[10];
    TestClass * ttt[10];

    cout << "new................." << endl;
    ttt[0] = new TestClass();
}
