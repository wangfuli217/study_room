#include <bitset>
#include <iostream>
using namespace std;

int main()
{
    auto str1 = "0010101001";
    auto str2 = "0000101011";

    bitset<10> bitsOne(str1);
    bitset<10> bitsTwo(str2);

    auto bitsThree = bitsOne & bitsTwo;

    cout << bitsThree << endl;
    bitsThree <<= 4;
    cout << bitsThree << endl;
}
