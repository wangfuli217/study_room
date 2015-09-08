#include <iostream>
#include <iterator>
#include <list>
#include <algorithm>
using namespace std;

int main()
{
    list<int> foo,bar;
    for(int i=1; i<=5; i++)
    {
	foo.push_back(i);
	bar.push_back(i*10);
    }

    list<int>::iterator it = foo.begin();
    advance(it,3);
    cout << *it << endl;

    std::copy(bar.begin(), bar.end(), std::inserter(foo,it));

    std::cout << "foo contains : ";
    for(auto i:foo) cout << i << " ";
    cout << endl;

    return 0;
}
