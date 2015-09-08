#include <iostream>
#include <algorithm>
#include <vector>
#include <list>
#include <iterator>
using namespace std;

int main()
{
    vector<int> v;

    v.push_back(10);
    v.push_back(20);
    v.push_back(30);
    v.push_back(40);
    v.push_back(50);

    list<int> lt1;
    lt1.push_back(1);
    lt1.push_back(2);
    lt1.push_back(3);

    list<int> lt2;
    lt2.push_back(1);
    lt2.push_back(2);
    lt2.push_back(3);

    // use push_back 
    copy(v.begin(), v.end(), back_inserter<list<int>> (lt1));

    // use push_front
    copy(v.begin(), v.end(), front_inserter<list<int>> (lt2));

    cout << "v : ";
    for(auto i:v) cout << i << " ";
    cout << endl;

    cout << "lt1 : ";
    for(auto i:lt1) cout << i << " ";
    cout << endl;

    cout << "lt2 : ";
    for(auto i:lt2) cout << i << " ";
    cout << endl;

    return 0;
}
