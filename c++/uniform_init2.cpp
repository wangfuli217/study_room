#include <iostream>
#include <vector>
using namespace std;

int main()
{
    vector<string> v1, v2;

    v1.push_back("string 1");
    v1.push_back("string 2");
    v1.push_back("string 3");

    cout << "v1 : ";
    for( auto i : v1 ) cout << i << " ";
    cout << endl;

    v2 = {"string 1", "string 2" , "string 3"};

    cout << "v2 : ";
    for( auto i : v2 ) cout << i << " ";
    cout << endl;

    return 0;
}
