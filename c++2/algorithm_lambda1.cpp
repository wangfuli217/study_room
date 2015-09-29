#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

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

    auto it = find_if(v.begin(), v.end(), [](int i){ return i>5; } );
    if(it != v.end())
    {
        cout << "greater : " << *it << endl;
    }
    else
    {
        cout << "no greater num" << endl;
    }
}
