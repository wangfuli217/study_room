#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

bool Pred(int n)
{
    return 25 < n;
}

int main()
{
    vector<int> v;

    v.push_back(10);
    v.push_back(20);
    v.push_back(30);
    v.push_back(40);
    v.push_back(50);

    for(auto i : v)
	cout << i << " ";
    cout << endl;

    int n = count_if(v.begin(), v.end(), Pred);
    cout << "> 25 count : " << n << endl;

    return 0;
}
