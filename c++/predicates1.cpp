#include <iostream>
#include <map>

using namespace std;

// function object
struct Greater_than
{
    int val;
    Greater_than(int v) : val(v) {}
    bool operator() (const pair<string,int>& r) {return r.second>val;}
};

void f(map<string,int>& m)
{
    // provide compare value and compare function object(predicate)
    // at the same time
    map<string,int>::iterator p = find_if(m.begin(),m.end(),Greater_than(42));

    // This is also good.
    // auto p = find_if(m.begin(),m.end(),Greater_than(42));

    cout << p->first << ", " << p->second << endl;
}

int main()
{
    map<string,int> m;

    m.insert(pair<string,int>("dplee",12345));
    m.insert(pair<string,int>("inwonns",23456));
    m.insert(pair<string,int>("junha",34567));
    m.insert(pair<string,int>("yunho",45678));

    f(m);

    // using lambda expression as predicate
    int cxx = count_if( m.begin(),
			m.end(),
			[](const pair<string,int>& r) {return r.second>42;});

    cout << "map elements count : " << cxx << endl;
}
