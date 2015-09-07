#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main()
{
    vector<int> v;

    for(int i=0; i<10000000; ++i)
    {
	v.push_back(i);
    }

    cout << "before reverse"<< endl;

    reverse(v.begin(), v.end());

    cout << "after reverse"<< endl;
    
    return 0;
}
