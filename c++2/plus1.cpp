#include <iostream>
#include <algorithm>
using namespace std;

int main()
{
    plus<int> myPlus;
    int res = myPlus(4,5);
    cout << res << endl;
}
