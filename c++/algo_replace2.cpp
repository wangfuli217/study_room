#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

bool Pred(int n)
{
    return 30 <= n && n <= 50;
}

int main()
{
    vector<int> v;

    v.push_back(10);
    v.push_back(20);
    v.push_back(30);
    v.push_back(40);
    v.push_back(50);
    v.push_back(60);
    v.push_back(70);
    v.push_back(80);

    cout << "v : ";
    for(auto i : v) cout << i << " ";
    cout << endl;

    replace_if(v.begin(), v.end(), Pred, 0);

    cout << "v : ";
    for(auto i : v) cout << i << " ";
    cout << endl;

    return 0;
}
