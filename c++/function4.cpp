#include <iostream>
#include <algorithm>
#include <vector>
using namespace std;

bool isOdd(int num)
{
    return num % 2 == 1;
}

int main()
{
    vector<int> v;

    for(int i=0; i<100; ++i)
        v.push_back(i);

    auto f1 = isOdd;
    int cnt = count_if(v.cbegin(), v.cend(), f1);

    cout << cnt << " odd numbers." << endl;

    return 0;
}
