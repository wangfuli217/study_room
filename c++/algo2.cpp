#include <iostream>
#include <vector>

using namespace std;

template<typename T>
using Iterator<T> = typename T::iterator;

template<typename C, typename V>
vector<Iterator<C>> find_all(C& c, V v)
{
    vector<Iterator<C>> res;
    for(auto p=c.begin(); p!=c.end(); ++p)
	if(*p==v)
	    res.push_back(p);
    return res;
}

void test()
{
    string m{"Mary had a little lamb"};

    for(auto p : find_all(m,'a'))
	if(*p!='a')
	    cerr << "string bug!\n";

    list<double> ld{1.1, 2.2, 3.3, 1.1};
    for(auto p : find_all(ld, 1.1))
	if(*p!=1.1)
	    cerr << "list bug!\n";

    vector<string> vs{"red", "blue", "green", "green", "orange", "green"};
    for(auto p : find_all(vs, "green"))
	if(*p!="green")
	    cerr << "vector bug!\n";

    for(auto p : find_all(vs, "green"))
	*p = "vert";
}

int main()
{
    test();
}
