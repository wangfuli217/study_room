#include <iostream>
using namespace std;

class IntWrapper
{
public:
    IntWrapper(int i) : mInt(i) {}
    operator int() const { return mInt; }
private:
    int mInt;
};

int main()
{
    IntWrapper c(123);
    int iC1 = c;  // implicit type conversion
    cout << "iC1 : " << iC1 << endl;

    int iC2 = int(c); // explicit type conversion
    cout << "iC2 : " << iC2 << endl;
}
