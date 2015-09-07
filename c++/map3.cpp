#include <iostream>
#include <map>
using namespace std;

int main()
{
    map<int,int> m;

    m[0] = 100;
    m[100] = 100 * 100;

    cout << "size : " << m.size() << endl;
    for(map<int,int>::iterator iter=m.begin(); iter!=m.end(); ++iter)
	cout << "key : " << iter->first << ", value : " << iter->second << " ";
    cout << endl;

    return 0;
}
