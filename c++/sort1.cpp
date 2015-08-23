#include <iostream>
#include <vector>

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
    std::sort(v.begin(),v.end());

    for(auto p : v)
    {
	std::cout << p << std::endl;
    }
}
