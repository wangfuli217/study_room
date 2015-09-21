#include <forward_list>
#include <iostream>
using namespace std;

int main()
{
    forward_list<int> lst1 = {5,6};
    forward_list<int> lst2 = {1,2,3,4};
    forward_list<int> lst3 = {7,8,9};

    lst1.splice_after(lst1.before_begin(), lst2);
    lst1.push_front(0);

    auto iter = lst1.before_begin();
    auto iterTemp = iter;

    while(++iterTemp != lst1.end())
    {
	++iter;
    }

    lst1.insert_after(iter, lst3.begin(), lst3.end());
    for(auto& i : lst1)
    {
	cout << i << ' ';
    }
    cout << endl;

    return 0;
}
