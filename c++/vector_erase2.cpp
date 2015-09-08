#include <iostream>
#include <vector>
using namespace std;

bool is_value_30(int x)
{
    return x == 30;
}

int main()
{
    vector<int> v;

    v.push_back(10);
    v.push_back(20);
    v.push_back(30);
    v.push_back(40);
    v.push_back(30);
    v.push_back(50);
    v.push_back(30);

    cout << "v.size : " << v.size() << endl;
    cout << "v : ";
    for(auto i:v) cout << i << " ";
    cout << endl;

    for(vector<int>::iterator iter=v.begin(); iter!=v.end(); )
    {
	cout << "*iter : " << *iter << endl;
	if(is_value_30(*iter))
	{
	    iter = v.erase(iter);
	}
	else ++iter;
    }

    cout << "v.size : " << v.size() << endl;
    cout << "v : ";
    for(auto i:v) cout << i << " ";
    cout << endl;

    return 0;
}
