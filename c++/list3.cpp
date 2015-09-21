#include <iostream>
#include <list>
using namespace std;

int main()
{
    list<int> l;

    for(int i=0; i<10; ++i)
	l.push_back(i);

    cout << "l : ";
    for(auto& i : l) cout << i << " ";
    cout << endl;

    l.push_front(-1);

    cout << "l : ";
    for(auto& i : l) cout << i << " ";
    cout << endl;

    list<int>::iterator it = l.begin();
    ++it;
    ++it;
    ++it;
    ++it;
    ++it;
    l.insert(it, 7777);

    cout << "l : ";
    for(auto& i : l) cout << i << " ";
    cout << endl;

    --it;
    l.erase(it);

    cout << "l : ";
    for(auto& i : l) cout << i << " ";
    cout << endl;

    cout << "size : " << l.size() << endl;

    l.resize(8);
    cout << "size : " << l.size() << endl;
    cout << "l : ";
    for(auto& i : l) cout << i << " ";
    cout << endl;

    return 0;
}
