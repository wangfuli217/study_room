#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main()
{
    vector<int> v1;
    v1.push_back(10);
    v1.push_back(30);
    v1.push_back(50);
    v1.push_back(60);
    v1.push_back(80);

    vector<int> v2;
    v2.push_back(20);
    v2.push_back(40);
    v2.push_back(70);

    vector<int> v3(10);
    vector<int>::iterator iter_end;
    iter_end = merge(v1.begin(), v1.end(), v2.begin(), v2.end(), v3.begin());

    cout << "v1 : ";
    for(auto i : v1) cout << i << " ";
    cout << endl;

    cout << "v2 : ";
    for(auto i : v2) cout << i << " ";
    cout << endl;

    cout << "v3 : ";
    for(auto i : v3) cout << i << " ";
    cout << endl;

    cout << "v3(merge) : " << *v3.begin() << "~" << *(iter_end-1) << endl;

    return 0;
}
