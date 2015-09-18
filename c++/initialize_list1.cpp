#include <iostream>
#include <initializer_list>
using namespace std;

int makeSum(initializer_list<int> lst)
{
    int total = 0;
    for(auto iter = lst.begin(); iter!=lst.end(); ++iter)
	total += (*iter);
    return total;
}

int main()
{
    int a = makeSum({1,2,3});
    int b = makeSum({10,20,30,40,50,60});

    cout << "a : " << a << ", b : " << b << endl;

    initializer_list<int> ll = {1,2,3,4,5};
    initializer_list<int>::iterator it = ll.begin();
    cout << *it++ << endl;
    cout << *it++ << endl;
    cout << *it++ << endl;
    cout << *it++ << endl;
    cout << *it++ << endl;

    initializer_list<string> ss = {"s1","s2","s3","s4","s5"};
    initializer_list<string>::iterator iss = ss.begin();
    cout << *iss++ << endl;
    cout << *iss++ << endl;
    cout << *iss++ << endl;
    cout << *iss++ << endl;
    cout << *iss++ << endl;
}
