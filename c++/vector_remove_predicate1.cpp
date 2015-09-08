#include <iostream>
#include <vector>
using namespace std;

bool is_value_30(int x)
{
    return x == 30;
}

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

    v.erase(remove_if(v.begin(), v.end(), is_value_30), v.end());

    cout << "v.size : " << v.size() << endl;
    cout << "v : ";
    for(auto i:v) cout << i << " ";
    cout << endl;

    return 0;
}
