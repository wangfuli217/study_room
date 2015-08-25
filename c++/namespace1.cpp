// Extended std namespace for shorter sort algorithm arguments
#include <iostream>
#include <vector>

namespace Estd
{
    using namespace std;

    template<class C>
    void sort(C& c)
    {
        sort(c.begin(),c.end());
    }

    template<class C, class Pred>
    void sort(C& c, Pred p)
    {
        sort(c.begin(),c.end(),p);
    }
}

int main()
{
    std::vector<int> v;

    v.push_back(3);
    v.push_back(1);
    v.push_back(5);
    v.push_back(2);
    v.push_back(9);

    for(auto p : v)
    {
        std::cout << p << std::endl;
    }

    std::cout << "==============" << std::endl;
    Estd::sort(v);

    for(auto p : v)
    {
        std::cout << p << std::endl;
    }
}
