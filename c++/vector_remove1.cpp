#include <iostream>
#include <vector>
using namespace std;

int main()
{
    vector<int> v;

    v.push_back(10);
    v.push_back(20);
    v.push_back(30);
    v.push_back(40);
    v.push_back(30);
    v.push_back(50);
    v.push_back(30);

    cout << "v.size : " << v.size() << endl;
    cout << "v : ";
    for(auto i:v) cout << i << " ";
    cout << endl;

    vector<int>::iterator iter_end = remove(v.begin(), v.end(), 30);

    cout << "v.size : " << v.size() << endl;
    cout << "v : ";
    for(auto i:v) cout << i << " ";
    cout << endl;

    cout << "iter_end : " << *iter_end << endl;

    return 0;
}
