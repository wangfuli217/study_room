#include <iostream>
#include <vector>
using namespace std;

int main()
{
    vector<int> v(10);
    int num = 0;

    for(auto& i : v)
    {
	i = num++;
    }

    for(auto& i : v) cout << i << endl;

    cout << "=========" << endl;

    vector<int> v1(v);
    for(auto& i : v1) cout << i << endl;

    return 0;
}
