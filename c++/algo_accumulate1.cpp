#include <iostream>
#include <vector>
#include <numeric>
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

    cout << accumulate(v.begin(), v.end(), 0) << endl;
    cout << accumulate(v.begin(), v.end(), 100) << endl;

    return 0;
}
