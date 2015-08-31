#include <iostream>
#include <string>
#include <vector>

using namespace std;

const vector<string> explode(const string& s, const char& c)
{
    string buff{""};
    vector<string> v;

    for(auto n:s)
    {
	if(n != c)
	{
	    buff+=n;
	}
	else
	{
	    if(n == c && buff != "")
	    {
		v.push_back(buff); buff = "";
	    }
	}
    }

    if(buff != "")
	v.push_back(buff);

    return v;
}

int main()
{
    string str{"The quick brown fox jumps over the lazy dog"};
    vector<string> v{explode(str,' ')};
    for(auto n:v)
	cout << n << endl;

    return 0;
}
