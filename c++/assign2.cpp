#include <iostream>
#include <vector>
using namespace std;

int main()
{
    vector<int> v;

    for(int i=0; i<10; ++i)
	v.push_back(i* 100);

    for(auto i:v) cout << i << endl;

    vector<int> v1;
    v1.assign(v.begin(), v.end());

    cout << "=================" << endl;
    cout << "size : " << v1.size() << endl;
    cout << "capacity : " << v1.capacity() << endl;
    for(auto i:v1) cout << i << endl;

    v1.assign(15,7777);

    cout << "=================" << endl;
    cout << "size : " << v1.size() << endl;
    cout << "capacity : " << v1.capacity() << endl;
    for(auto i:v1) cout << i << endl;

    return 0;
}
