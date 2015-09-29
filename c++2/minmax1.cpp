#include <iostream>
using namespace std;

int main()
{
    int x1 = 2, x2 = 9, x3 = 3, x4 = 12;
    cout << "Max of 4 elements is " << max({x1,x2,x3,x4}) << endl;
    cout << "Min of 4 elements is " << min({x1,x2,x3,x4}) << endl;

    auto p2 = minmax({x1,x2,x3,x4});
    cout << "Minmax of 4 elements is <" << p2.first << "," << p2.second << ">" << endl;
}
