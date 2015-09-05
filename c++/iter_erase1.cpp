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
    v.push_back(50);

    vector<int>::iterator iter;
    vector<int>::iterator iter2;
    for(iter=v.begin(); iter!=v.end(); ++iter)
	cout << *iter << " ";
    cout << endl;

    iter = v.begin() + 2;
    // erase 30
    iter2 = v.erase(iter);
    for(iter=v.begin(); iter!=v.end(); ++iter)
	cout << *iter << " ";
    cout << endl;

    iter2 = v.erase(v.begin()+1, v.end());
    if( iter2 == v.end() )
	cout << "iter2 is end" << endl;

    for(iter=v.begin(); iter!=v.end(); ++iter)
	cout << *iter << " ";
    cout << endl;

    return 0;
}
