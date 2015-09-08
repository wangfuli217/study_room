#include <iostream>
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
    
    list<int> lt;
    lt.push_back(10);
    lt.push_back(20);
    lt.push_back(30);

    cout << "[v.begin(), v.end())'s count : " <<
	distance(v.begin(), v.end()) << endl;
    cout << "[lt.begin(), lt.end())'s count : " <<
	distance(lt.begin(), lt.end()) << endl;

    cout << "[v.begin(), v.end())'s count : " <<
	v.end() - v.end() << endl;
    // cout << "[lt.begin(), lt.end())'s count : " <<
    //  lt.end() - lt.begin() << endl;

    return 0;
}
