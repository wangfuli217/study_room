#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int Func(int n)
{
    return n+5;
}

int main()
{
    vector<int> v1;
    v1.push_back(10);
    v1.push_back(20);
    v1.push_back(30);
    v1.push_back(40);
    v1.push_back(50);

    vector<int> v2(10);

    cout << "v1 : ";
    for(auto i:v1) cout << i << " ";
    cout << endl;
    
    cout << "v2 : ";
    for(auto i:v2) cout << i << " ";
    cout << endl;

    vector<int>::iterator iter_end;
    iter_end = transform(v1.begin(), v1.end(), v2.begin(), Func);

    cout << "v1 : ";
    for(auto i:v1) cout << i << " ";
    cout << endl;
    
    cout << "v2 : ";
    for(auto i:v2) cout << i << " ";
    cout << endl;

    cout << "[v2.begin(), iter_end) number_array : " << *v2.begin() << "..." <<
	*(iter_end-1) << endl;

    return 0;
}
