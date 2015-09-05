#include <iostream>
#include <set>
using namespace std;

int main()
{
    set<int> s;

    s.insert(50);
    s.insert(30);
    s.insert(80);
    s.insert(40);
    s.insert(10);
    s.insert(70);
    s.insert(90);

    set<int>::iterator iter;
    for(iter=s.begin(); iter!=s.end(); ++iter)
	cout << *iter << " ";
    cout << endl;

    pair<set<int>::iterator, bool> ret;

    ret = s.insert(50);
    if( true == ret.second )
    {
	cout << "insert success... : " << *ret.first << endl;
    }
    else
    {
	cout << "insert fail... 50" << endl;
    }

    ret = s.insert(500);
    if( true == ret.second )
    {
	cout << "insert success... : " << *ret.first << endl;
    }
    else
    {
	cout << "insert fail... 500" << endl;
    }

    for(iter=s.begin(); iter!=s.end(); ++iter)
	cout << *iter << " " ;
    cout << endl;

    return 0;
}
