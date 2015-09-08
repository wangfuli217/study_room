#include <iostream>
#include <vector>
#include <algorithm>

template<typename T>
struct Plus
{
private:
    int total = 0;
public:
    void operator()(T& x)
    {
	total += x;
	x = total;
	std::cout << "total : " << total << std::endl;
    }
};

int main()
{
    std::vector<int> first;
    std::vector<int> second;
    std::vector<int> third;
    
    // first : 100 100 100 100 100 100 100
    first.assign(7,100);
    for_each(first.begin(), first.end(), Plus<int>());

    std::vector<int>::iterator it;
    it = first.begin() + 1;

    std::cout << "it : " << *it << std::endl;

    second.assign(it,first.end());
    second.assign(it,first.end()-1);

    int myints[] = {1776,7,4};
    third.assign(myints,myints+3);

    std::cout << "Size of first : " << int(first.size()) << std::endl;
    std::cout << "Size of second : " << int(second.size()) << std::endl;
    std::cout << "Size of third : " << int(third.size()) << std::endl;

    std::cout << "first : ";
    for(auto i:first) std::cout << i << " ";
    std::cout << std::endl;

    std::cout << "second : ";
    for(auto i:second) std::cout << i << " ";

    std::cout << std::endl;

    std::cout << "third : ";
    for(auto i:third) std::cout << i << " ";
    std::cout << std::endl;

    return 0;
}
  
