#include <iostream>
#include <complex>

int main()
{
    std::complex<double> mycomplex(20.0,2.0);
    std::cout << "Imaginary part: " << mycomplex.imag() << '\n';

    return 0;
}
