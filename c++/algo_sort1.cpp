#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

bool Greater(int left, int right)
{
    return left > right;
}

int main()
{
    vector<int> v;

    for(int i = 0; i<100; ++i)
	v.push_back(rand() % 1000);

    cout << "v[before sort] : ";
    for(auto i:v) cout << i << " ";
    cout << endl;

    sort(v.begin(), v.end());

    cout << "v[sort less] : ";
    for(auto i:v) cout << i << " ";
    cout << endl;
    
    sort(v.begin(), v.end(), Greater);
    
    cout << "v[sort greater] : ";
    for(auto i:v) cout << i << " ";
    cout << endl;

    return 0;
}
