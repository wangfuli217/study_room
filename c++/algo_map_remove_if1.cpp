#include <iostream>
#include <map>
#include <algorithm>
using namespace std;

template<typename Iter>
bool Pred(Iter n)
{
    return 30<=n.first && n.first<=40;
}

int main()
{
    map<int,int> m;

    m.insert(pair<int,int>(10,10));
    m.insert(pair<int,int>(20,20));
    m.insert(pair<int,int>(30,30));
    m.insert(pair<int,int>(40,40));
    m.insert(pair<int,int>(50,50));

    cout << "m : ";
    for(auto i:m) cout << "<" << i.first << "," << i.second << "> ";
    cout << endl;

    map<int,int>::iterator iter_end;
    iter_end = remove_if(m.begin(), m.end(), Pred);

    // cout << "after remove_if [v.begin(), iter_end) number_array : ";
    // for(vector<int>::iterator iter=v.begin(); iter!=iter_end; ++iter)
    // 	cout << *iter << " ";
    // cout << endl;
    
    return 0;
}
