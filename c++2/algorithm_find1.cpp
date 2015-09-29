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

    while(true)
    {
        cout << "Enter numbre to find : ";
        cin >> num;
        if(num == 0) break;

        auto it = find(v.begin(), v.end(), num);
        if(it == v.end())
        {
            cout << "not found : " << num << endl;
        }
        else
        {
            cout << "found : " << num << endl;
        }
    }
}
