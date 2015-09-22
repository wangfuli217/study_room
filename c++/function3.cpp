#include <iostream>
#include <vector>
#include <algorithm>
#include <functional>
using namespace std;

bool isEven(int num)
{
    return num % 2 == 0;
}

int main()
{
    vector<int> vec;

    for(int i=0; i<10; ++i)
        vec.push_back(i);

    auto f2 = isEven;
    int cnt = count_if(vec.cbegin(), vec.cend(), f2);
    cout << cnt << " even numbers" << endl;
    return 0;
}
