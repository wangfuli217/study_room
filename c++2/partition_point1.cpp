#include <iostream>
#include <algorithm>
#include <vector>

bool IsOdd(int i) { return (i%2)==1; }

int main()
{
    std::vector<int> foo{1,2,3,4,5,6,7,8,9};
    std::vector<int> odd;

    std::partition(foo.begin(), foo.end(), IsOdd);

    auto it = std::partition_point(foo.begin(),foo.end(),IsOdd);
    odd.assign (foo.begin(),it);

    std::cout << "odd:";
    for (int& x:odd) std::cout << ' ' << x;
    std::cout << '\n';

    return 0;
}
