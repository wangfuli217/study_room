#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main()
{
    vector<int> v1 = {1,2,3,4,5};
    vector<int> v2 = {10,20,30,40,50};

    auto printVec = [](const vector<int>& vec)
    {
        for(auto& i : vec) cout << i << " ";
        cout << endl;
    };

    cout << "v1 : "; printVec(v1);
    cout << "v2 : "; printVec(v2);

    transform(v1.begin(), v1.end(), v2.begin(), v1.begin(),
              [](int a, int b){ return a+b;});

    cout << "v1 : "; printVec(v1);
    cout << "v2 : "; printVec(v2);
}
