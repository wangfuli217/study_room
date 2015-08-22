// istream_iterator example
#include <iostream>     // std::cin, std::cout
#include <iterator>     // std::istream_iterator

int main () {
    double value1, value2;
    std::cout << "Please, insert two values: ";

    std::istream_iterator<double> eot;              // end-of-stream iterator
    std::istream_iterator<double> iit (std::cin);   // stdin iterator

    if (iit!=eot) value1=*iit;

    ++iit;
    if (iit!=eot) value2=*iit;

    std::cout << value1 << "*" << value2 << "=" << (value1*value2) << '\n';

    return 0;
}
