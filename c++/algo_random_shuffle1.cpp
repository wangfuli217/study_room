#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main()
{
    vector<int> v;

    v.push_back(10);
    v.push_back(20);
    v.push_back(30);
    v.push_back(40);
    v.push_back(50);

    cout << "v : ";
    for(auto i:v) cout << i << " ";
    cout << endl;

    // #include <ctime>
    // srand((unsigned)time(NULL));

    random_shuffle(v.begin(), v.end());

    cout << "v : ";
    for(auto i:v) cout << i << " ";
    cout << endl;
    
    random_shuffle(v.begin(), v.end());

    cout << "v : ";
    for(auto i:v) cout << i << " ";
    cout << endl;

    return 0;
}
