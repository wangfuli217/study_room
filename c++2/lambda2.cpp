#include <iostream>
#include <vector>
#include <functional>
using namespace std;

bool func(int x)
{
    if(x%2 == 0) return 0;
    else return 1;
}

void testCallback(const vector<int>& vec,
                  const function<bool(int)>& callback)
{
    for(auto i : vec)
    {
        if(!callback(i))
        {
            cout << i << " ";
        }
    }
    cout << endl;
}

int main()
{
    vector<int> v;

    function<bool(int)> f = func;

    for(int i=0; i<10; ++i)
        v.push_back(i);

    testCallback(v, f);
}
