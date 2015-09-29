#include <iostream>
#include <vector>
#include <algorithm>
#include <functional>
#include <string>
using namespace std;

void findEmptyString(const vector<string>& strings)
{
    auto it = find_if(strings.begin(), strings.end(),
                      [](const string& str) {return str.empty();});
    if(it==strings.end())
    {
        cout << "No empty strings!" << endl;
    }
    else
    {
        cout << "Empty string at position : " << it - strings.begin() << endl;
    }
}

int main()
{
    vector<string> v(10);

    generate(v.begin(), v.end(), []{ return "aaa";});
    for(auto& i : v) cout << i << " ";
    cout << endl;

    findEmptyString(v);
}
