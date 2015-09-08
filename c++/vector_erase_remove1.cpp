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

    v.erase(remove(v.begin(), v.end(), 30), v.end());

    cout << "v.size : " << v.size() << endl;
    cout << "v : ";
    for(auto i:v) cout << i << " ";
    cout << endl;

    return 0;
}
