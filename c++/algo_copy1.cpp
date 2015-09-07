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
    v2.push_back(21);
    v2.push_back(31);
    v2.push_back(41);
    v2.push_back(51);
    
    // overwrite
    vector<int>::iterator iter;
    iter = copy(v1.begin(), v1.end(), v2.begin());
    cout << "v2's last elem : " << *(iter-1) << endl;

    cout << "v1 : ";
    for(auto i : v1) cout << i << " ";
    cout << endl;

    cout << "v2 : ";
    for(auto i : v2) cout << i << " ";
    cout << endl;

    return 0;
}
