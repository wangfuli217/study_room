#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

bool mycheck(int num)
{
    return num > 5;
}

int main()
{
    vector<int> v;
    int num = 0;

    while(true)
    {
        cout << "Enter number to push : ";
        cin >> num;
        if(num == 0) break;

        v.push_back(num);
    }

    auto it = find_if(v.begin(), v.end(), mycheck);
    if(it != v.end())
    {
        cout << "greater : " << *it << endl;
    }
    else
    {
        cout << "no greater num" << endl;
    }
}
