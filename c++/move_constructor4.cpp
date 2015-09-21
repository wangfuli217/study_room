#include <iostream>
#include <vector>
using namespace std;

vector<int> createVectorofSize(size_t size)
{
    vector<int> vec(size);
    int contents = 0;
    for(auto& i : vec)
	i = contents++;
    return vec;  // local temporary object
}

int main()
{
    // move constructor
    vector<int> t = createVectorofSize(10);

    for(auto i : t) cout << i << endl;
}
