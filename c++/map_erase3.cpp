#include <iostream>
#include <map>
#include <algorithm>

class foo
{
public:
    enum CompType { GREATER=1, LESS=-1 };
    foo(int nVal=15, enum CompType ctype=GREATER)
	: m_nVal(nVal)
	, m_bGreater(ctype==GREATER)
	{
	}
    bool operator()(std::pair<int, int> p)
	{
	    if (m_bGreater)
		return p.second > m_nVal;
	    else
		return p.second < m_nVal;
	}
private:
    int  m_nVal;
    bool m_bGreater;
};

void MapRemove(std::map<int, int> &m, foo &pred)
{
    auto itr = std::find_if(m.begin(), m.end(), pred);
    while (itr != m.end())
	itr = std::find_if(m.erase(itr), m.end(), pred);
}

int main(int argc, char *argv[])
{
    std::map<int, int> m;

    m.insert(std::make_pair(0, 0));
    m.insert(std::make_pair(1, 10));
    m.insert(std::make_pair(2, 20));
    m.insert(std::make_pair(3, 30));

    foo x(20);
    MapRemove(m, x);

    for (auto itr=m.begin(); itr!=m.end(); ++itr)
	std::cout << "(" << itr->first << ", "
		  << itr->second << ")" << '\n';

    return 0;
}
