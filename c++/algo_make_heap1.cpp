#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main()
{
    vector<int> v;
    v.push_back(10);
    v.push_back(20);
    v.push_back(30);
    v.push_back(40);
    v.push_back(50);
    v.push_back(60);

    cout << "v : ";
    for(auto i:v) cout << i << " ";
    cout << endl;

    make_heap(v.begin(), v.end());

    cout << "make_heap : ";
    for(auto i:v) cout << i << " ";
    cout << endl;

    return 0;
}
