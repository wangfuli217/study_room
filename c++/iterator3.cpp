#include <iostream>
#include <vector>
using namespace std;

int main()
{
    vector<int> v;

    v.push_back(10);
    v.push_back(20);
    v.push_back(30);
    v.push_back(40);

    vector<int>::iterator iter = v.begin();
    vector<int>::const_iterator citer = v.begin() + 1;
    const vector<int>::iterator const_iter = v.begin() + 2;
    const vector<int>::const_iterator const_citer = v.begin() + 3;

    *iter = 100;        // ok
    ++iter;             // ok

    *citer = 200;       // X
    ++citer;            // ok

    *const_iter = 300;  // ok
    ++const_iter;       // X

    *const_citer = 400; // X
    ++const_citer;      // X

    return 0;
}
