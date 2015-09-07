#include <iostream>
#include <set>
using namespace std;

int main()
{
    set<int, less<int>> s;

    // is 30 is less than 50 ?
    cout << s.key_comp()(30,50) << endl;

    // is 50 is less than 30 ?
    cout << s.key_comp()(50,30) << endl;

    cout << (!s.key_comp()(30,50) && !s.key_comp()(50,30))
	 << endl;

    cout << (!s.key_comp()(30,30) && !s.key_comp()(30,30))
	 << endl;

    return 0;
}
