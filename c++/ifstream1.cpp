http://www.cplusplus.com/reference/fstream/ifstream/ifstream/

#include <iostream>
#include <fstream>

int main()
{
    // open read mode
    std::ifstream ifs("test.txt", std::ifstream::in);

    char c = ifs.get();

    while(ifs.good())
    {
	std::cout << c;
	c = ifs.get();
    }

    ifs.close();

    return 0;
}
