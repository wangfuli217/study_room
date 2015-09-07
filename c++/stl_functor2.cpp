#include <iostream>
#include <map>
#include <string>
#include <algorithm>
using namespace std;

struct Func1
{
    void operator()(pair<int,string> arg)
    {
	cout << "key : " << arg.first << ", val : " << arg.second << endl;
    }
};

int main()
{
    map<int,string> m;

    m[1] = "111";
    m[2] = "222";
    m[3] = "333";
    m[4] = "444";
    m[5] = "555";

    for_each(m.begin(), m.end(), Func1());

    return 0;
}
