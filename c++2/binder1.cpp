#include <iostream>
#include <string>
using namespace std;

void func(int num, const string& str)
{
    cout << "func(" << num << ", " << str << ")" << endl;
}

int main()
{
    string str = "abc";
    auto f1 = bind(func, placeholders::_1, str);
    f1(16);

    auto f2 = bind(func, placeholders::_2, placeholders::_1);
    f2("ccc", 18);
}
