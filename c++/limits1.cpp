#include <limits>
#include <iostream>
using namespace std;

int main()
{
    cout << "int max : " << numeric_limits<int>::max() << endl;
    cout << "int min : " << numeric_limits<int>::lowest() << endl;
    cout << "double max : " << numeric_limits<double>::max() << endl;
    cout << "double min : " << numeric_limits<double>::lowest() << endl;
}
