#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main()
{
    vector<int> v1;
    v1.push_back(10);
    v1.push_back(20);
    v1.push_back(30);
    v1.push_back(40);
    v1.push_back(50);

    vector<int> v2;
    v2.push_back(11);
    v2.push_back(22);
    v2.push_back(33);
    v2.push_back(44);
    v2.push_back(55);

    cout << "v1 : ";
    for(auto i:v1) cout << i << " ";
    cout << endl;

    cout << "v2 : ";
    for(auto i:v2) cout << i << " ";
    cout << endl;

    swap_ranges(v1.begin(), v1.end(), v2.begin());

    cout << "v1 : ";
    for(auto i:v1) cout << i << " ";
    cout << endl;

    cout << "v2 : ";
    for(auto i:v2) cout << i << " ";
    cout << endl;
    
    return 0;
}
