#include <iostream>
#include <vector>
#include <functional>
using namespace std;

void process(const vector<int>& vec, function<void(int)> f)
{
    for(auto& i : vec)
        f(i);
}

void print(int num)
{
    cout << num << " ";
}

int main()
{
    vector<int> v;

    auto f1 = process;
    for(int i=0; i<10; ++i)
        v.push_back(i);

    f1(v, print);
    cout << endl;

    int sum = 0;
    f1(v, [&sum](int num){sum += num;});
    cout << "sum = " << sum << endl;

    return 0;
}
