#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main()
{
    vector<int> vec(10);
    int value = 1;
    generate(vec.begin(), vec.end(), [&value]{value*=2; return value;});
    for(auto& i : vec)
        cout << i << " ";
}
