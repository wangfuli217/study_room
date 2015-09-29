#include <iostream>
#include <vector>
using namespace std;

int main()
{
    vector<int> v(10,100);
    for(auto& i : v) cout << i << " ";
    cout << endl;

    for_each(v.begin(), v.end(),
             [](int i)
             {
                 static int nsum;
                 nsum+=i;
                 cout << "nsum : " << nsum << " ";
             });
    cout << endl;
}
