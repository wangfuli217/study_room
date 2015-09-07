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

    make_heap(v.begin(), v.end());

    cout << "make_heap : ";
    for(auto i:v) cout << i << " ";
    cout << endl;

    v.push_back(35);
    cout << "add 35 to vector : ";
    for(auto i:v) cout << i << " ";
    cout << endl;

    push_heap(v.begin(), v.end());
    cout << "push_heap : ";
    for(auto i:v) cout << i << " ";
    cout << endl;

    return 0;
}
