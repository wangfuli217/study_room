#include <iostream>
#include <functional>

int half(int x)
{
    return x/2;
}

struct third_t
{
    int operator()(int x) { return x/3; }
};

struct MyValue
{
    int value;
    int fifth() { return value/5; }
};

int main()
{
    std::function<int(int)> fn1 = half;
    std::function<int(int)> fn2 = &half;
    std::function<int(int)> fn3 = third_t();
    std::function<int(int)> fn4 = [](int x) { return x/4; };
    std::function<int(int)> fn5 = std::negate<int>();

    std::cout << "fn1(60) : " << fn1(60) << std::endl;
    std::cout << "fn2(60) : " << fn2(60) << std::endl;
    std::cout << "fn3(60) : " << fn3(60) << std::endl;
    std::cout << "fn4(60) : " << fn4(60) << std::endl;
    std::cout << "fn5(60) : " << fn5(60) << std::endl;

    std::function<int(MyValue&)> value = &MyValue::value;
    std::function<int(MyValue&)> fifth = &MyValue::fifth;

    MyValue sixty {60};

    std::cout << "value(sixty) : " << value(sixty) << std::endl;
    std::cout << "fifth(sixty) : " << fifth(sixty) << std::endl;

    return 0;
}
