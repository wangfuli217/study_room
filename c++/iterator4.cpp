#include <iostream>
#include <vector>
using namespace std;

int main()
{
    vector<string> v(10, "hello ");

    for(auto& i : v)
    {
	i.append("world");
    }

    for(auto& i : v)
    {
	cout << i << endl;
    }

    for(vector<string>::iterator it=v.begin(); it!=v.end(); ++it)
    {
	it->append(" haha");
    }

    for(vector<string>::iterator it=v.begin(); it!=v.end(); ++it)
    {
	cout << *it << endl;
    }
}
