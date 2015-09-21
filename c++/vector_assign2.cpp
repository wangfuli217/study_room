#include <iostream>
#include <vector>
using namespace std;

int main()
{
    int num = 0;
    vector<int> v(10);

    for(auto& i : v)
    {
	i = num++;
    }

    cout << "v.size : " << v.size() << endl;
    for(auto& i : v) cout << i << endl;

    cout << "===============" << endl;

    v.assign(5,100);

    cout << "v.size : " << v.size() << endl;
    for(auto& i : v) cout << i << endl;
}
