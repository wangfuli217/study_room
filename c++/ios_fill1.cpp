#include <iostream>

int main()
{
    char prev;

    std::cout.width(10);
    std::cout << 40 << '\n';

    prev = std::cout.fill('x');
    std::cout.width(20);
    std::cout << 40 << '\n';

    std::cout.fill(prev);

    return 0;
}
