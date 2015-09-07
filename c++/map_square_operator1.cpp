#include <iostream>
#include <map>
using namespace std;

int main()
{
    map<int,int> m;

    m[5] = 100;
    m[3] = 100;
    m[8] = 30;
    m[4] = 40;
    m[1] = 70;
    m[7] = 100;
    m[9] = 50;

    map<int,int>::iterator iter;
    for(iter=m.begin(); iter!=m.end(); ++iter)
	cout << "(" << iter->first << "," << iter->second << ")" << " ";
    cout << endl;

    m[5] = 200;
    /*
    pair<map<int,int>::iterator,bool> ret;
    pair<int,int> pr(5,200);
    ret = m.insert(pr);
    cout << ret.first << "ret... " << ret.second << endl;
    */

    for(iter=m.begin(); iter!=m.end(); ++iter)
	cout << '(' << iter->first << ',' << iter->second << ")" << " ";
    cout << endl;

    return 0;
}
