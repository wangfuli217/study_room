#include <iostream>
#include <functional>

int main()
{
    int foo(10);
    ++foo;
    std::cout << "foo : " << foo << std::endl;

    auto bar = std::ref(foo);
    //auto bar = foo;

    ++bar;
    std::cout << "foo : " << foo << ", bar : " << bar << std::endl;

    return 0;
}
