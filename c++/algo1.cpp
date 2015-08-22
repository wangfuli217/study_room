#include <iostream>
#include <vector>

using namespace std;

bool has_c(const string& s, char c)
{
    auto p = find(s.begin(), s.end(), c);
    if(p!=s.end())
    {
	return true;
    }
    else
    {
	return false;
    }
}

bool has_c1(const string& s, char c)
{
    return find(s.begin(), s.end(), c) != s.end();
}

vector<string::iterator> find_all(string& s, char c)
{
    vector<string::iterator> res;
    for(auto p=s.begin(); p!=s.end(); ++p)
    {
	if(*p==c)
	{
	    res.push_back(p);
	}
    }
    return res;
}

template<typename C, typename V>
vector<typename C::iterator> find_all1(C& c, V v)
{
    vector<typename C::iterator> res;
    for(auto p = c.begin(); p!=c.end(); ++p)
    {
	if(*p==v)
	    res.push_back(p);
    }

    return res;
}

void test()
{
    string m{"Mary had a little lamb"};

    for(auto p : find_all(m,'a'))
	if(*p!='a')
	    cerr << "a bug!\n";
}

int main()
{
    string s = "abcdeabcdebccaace";
    char   c = 'c';

    cout << "============================" << endl;
    bool ret = has_c(s, c);
    cout << "ret : " << ret << endl;

    ret = has_c1(s, c);
    cout << "ret1 : " << ret << endl;

    cout << "============================" << endl;
    vector<string::iterator> all_iter;

    all_iter = find_all(s,c);
    for(auto x : all_iter)
    {
	cout << *x << endl;
    }

    cout << "============================" << endl;
    vector<string::iterator> all_iter1;

    all_iter1 = find_all1(s,c);
    for(auto x : all_iter1)
    {
	cout << *x << endl;
    }

    cout << "============================" << endl;
    test();
}
