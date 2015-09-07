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

    cout << "v : ";
    for(auto i:v) cout << i << " ";
    cout << endl;

    vector<int>::iterator iter_end;
    iter_end = remove(v.begin(), v.end(), 30);

    cout << "v : ";
    for(auto i:v) cout << i << " ";
    cout << endl;

    cout << "after remove [v.begin(), iter_end) number_array : ";
    for(auto i:v) cout << i << " ";
    cout << endl;
    
    return 0;
}
