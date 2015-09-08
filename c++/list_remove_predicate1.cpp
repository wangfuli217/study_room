#include <iostream>
#include <list>
using namespace std;

bool is_value_30(int x)
{
    return x == 30;
}

int main()
{
    list<int> l;

    l.push_back(10);
    l.push_back(20);
    l.push_back(30);
    l.push_back(40);
    l.push_back(30);
    l.push_back(50);
    l.push_back(30);

    cout << "l.size : " << l.size() << endl;
    cout << "l : ";
    for(auto i:l) cout << i << " ";
    cout << endl;

    //l.erase(remove_if(l.begin(), l.end(), is_value_30), l.end());
    l.remove_if(is_value_30);

    cout << "l.size : " << l.size() << endl;
    cout << "l : ";
    for(auto i:l) cout << i << " ";
    cout << endl;

    return 0;
}
