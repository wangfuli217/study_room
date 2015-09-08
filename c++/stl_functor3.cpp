#include <iostream>
#include <list>
#include <algorithm>
using namespace std;

class AddValue
{
private:
    int theValue;
public:
    AddValue(int val) : theValue(val) {}
    void operator()(int& elem) const
    {
	elem += theValue;
    }
};

int main()
{
    list<int> lst1(5,10);

    for_each(lst1.begin(), lst1.end(), AddValue(10));

    for(auto i : lst1) cout << i << endl;

    return 0;
}
