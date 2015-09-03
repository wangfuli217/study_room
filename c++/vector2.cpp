#include <iostream>
#include <vector>
using namespace std;

int main()
{
    vector<int> v1(5);

    cout << v1.size() << ", " << v1.capacity() << endl; 
    for( auto x : v1 )
	cout << x << endl;

    v1.push_back(10);
    v1.push_back(20);
    v1.push_back(30);
    v1.push_back(40);
    v1.push_back(50);
    v1.push_back(60);

    cout << v1.size() << ", " << v1.capacity() << endl; 
    for( auto x : v1 )
	cout << x << endl;

    v1.resize(5);
    cout << v1.size() << ", " << v1.capacity() << endl; 
    for( auto x : v1 )
	cout << x << endl;
}
