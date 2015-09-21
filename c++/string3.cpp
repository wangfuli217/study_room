#include <iostream>
#include <string>
using namespace std;

int main()
{
    string s = "10.23";
    size_t idx;

    int ret = stoi(s, &idx);

    cout << ret << ", idx : " << idx << endl;

    return 0;
}
