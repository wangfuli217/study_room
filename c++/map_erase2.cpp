#include <iostream>
#include <map>
using namespace std;

bool is_value_30(const pair<int,int>& p)
{
    return p.first == 30;
}

// This is nice for loop, but not good for performance.
// http://stackoverflow.com/questions/7007802/erase-specific-elements-in-stdmap
template<typename Map, typename F>
void map_erase_if(Map& m, F pred)
{
    for(typename Map::iterator i=m.begin();
	(i=find_if(i,m.end(),pred)) != m.end();
	m.erase(i++))
	;
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

    map_erase_if(m, is_value_30);

    cout << "m.size : " << m.size() << endl;
    cout << "m : ";
    for(auto i:m) cout << i.first << " ";
    cout << endl;

    return 0;
}
