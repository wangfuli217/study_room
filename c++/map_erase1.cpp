#include <iostream>
#include <map>
using namespace std;

bool is_value_30(int x)
{
    return x == 30;
}

int main()
{
    map<int,int> m;

    m.insert(pair<int,int>(20,20));
    m.insert(pair<int,int>(10,10));
    m.insert(pair<int,int>(40,40));
    m.insert(pair<int,int>(30,30));
    m.insert(pair<int,int>(50,50));

    cout << "m.size : " << m.size() << endl;
    cout << "m : ";
    for(auto i:m) cout << i.first << " ";
    cout << endl;

    for(map<int,int>::iterator iter=m.begin(); iter!=m.end(); )
    {
	cout << "*iter : " << iter->first << endl;
	if(is_value_30(iter->first))
	{
	    m.erase(iter++);
	}
	else ++iter;
    }

    cout << "m.size : " << m.size() << endl;
    cout << "m : ";
    for(auto i:m) cout << i.first << " ";
    cout << endl;

    return 0;
}
