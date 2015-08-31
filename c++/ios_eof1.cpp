#include <iostream>
#include <fstream>

int main()
{
    std::ifstream is("test.txt");

    char c;
    while(is.get(c))
	std::cout << c;

    if(is.eof())
	std::cout << "[EoF reached]\n";
    else
	std::cout << "[error reading]\n";

    is.close();

    return 0;
}
