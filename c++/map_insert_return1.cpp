#include <iostream>
#include <map>
using namespace std;

int main()
{
    map<int,int> m;
    pair<map<int,int>::iterator,bool> ret;

    m.insert(pair<int,int>(5,100));
    m.insert(pair<int,int>(3,100));
    m.insert(pair<int,int>(8,30));
    m.insert(pair<int,int>(4,40));
    m.insert(pair<int,int>(1,70));
    m.insert(pair<int,int>(7,100));

    pair<int,int> pr(9,50);
    ret = m.insert(pr);
    if(true == ret.second)
	cout << "key : " << ret.first->first << ", value : "
	     << ret.first->second << " save compete!" << endl;
    else
	cout << "key 9 already." << endl;

    ret = m.insert(pair<int,int>(9,50));
    if(true == ret.second)
	cout << "key : " << ret.first->first << ", value : "
	     << ret.first->second << "save complete!" << endl;
    else
	cout << "key : 9 already..." << endl;

    m[100] = 1000;

    map<int,int>::iterator iter;
    for(iter=m.begin(); iter!=m.end(); ++iter)
	cout << iter->first << ", " << iter->second << endl;

    return 0;
}
