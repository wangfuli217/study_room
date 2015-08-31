#include <iostream>
#include <fstream>
#include <cstdio>

int main()
{
    std::ifstream istr("test.txt");
    if(istr)
    {
	std::streambuf * pbuf = istr.rdbuf();
	do
	{
	    char ch = pbuf->sgetc();
	    std::cout << ch;
	} while(pbuf->snextc() != EOF);
	istr.close();
    }
    return 0;
}
