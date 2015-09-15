#include <iostream>
using namespace std;

class Test
{
public:
    typedef enum {Red=1, Green, Blue, Yellow} Colors;
    void setColor(Colors color);
    Colors getColor() { return mColor; }
protected:
    Colors mColor = Red;
};

void Test::setColor(Colors color)
{
    mColor = color;
}

int main()
{
    Test tt;

    tt.setColor(Test::Blue);
    cout << tt.getColor() << endl;
}
