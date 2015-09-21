#include <iostream>
#include <vector>
using namespace std;

int main()
{
    vector<int> v(10);
    cout << "1 : size : " << v.size() << ", capacity : " << v.capacity() << endl;

    v.resize(20);
    cout << "2 : size : " << v.size() << ", capacity : " << v.capacity() << endl;

    v.clear();
    cout << "3 : size : " << v.size() << ", capacity : " << v.capacity() << endl;

    v.reserve(30);
    cout << "4 : size : " << v.size() << ", capacity : " << v.capacity() << endl;

    if(v.empty())
    {
	cout << "v is empty" << endl;
    }
    else
    {
	cout << "v is not empty" << endl;
    }

    v.resize(10, 100);
    cout << "5 : size : " << v.size() << ", capacity : " << v.capacity() << endl;

    cout << "v : ";
    for(auto& i : v) cout << i << " ";
    cout << endl;
}
