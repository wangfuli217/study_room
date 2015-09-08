#include <iostream>
#include <algorithm>
#include <vector>
#include <functional>
using namespace std;

int op_increase(int i) { return ++i; }

int main()
{
    vector<int> foo;
    vector<int> bar;

    // foo : 10, 20, 30, 40, 50
    for(int i=1; i<6; ++i)
	foo.push_back(i*10);

    // allocate spacee
    bar.resize(foo.size());

    // bar : 11, 21, 31, 41, 51
    transform(foo.begin(), foo.end(), bar.begin(), op_increase);

    // plus - add together its two arguments
    // foo : 21, 41, 61, 81, 101
    transform(foo.begin(), foo.end(), bar.begin(), foo.begin(), plus<int>());

    cout << "foo contains:";
    for(auto i : foo) cout << i << " ";
    cout << '\n';

    return 0;
}
