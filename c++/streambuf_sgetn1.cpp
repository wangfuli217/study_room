#include <iostream>
#include <fstream>

int main()
{
    char * contents;
    std::ifstream istr("test.txt");

    if(istr)
    {
	std::streambuf * pbuf = istr.rdbuf();
	std::streamsize size = pbuf->pubseekoff(0,istr.end);
	pbuf->pubseekoff(0,istr.beg);
	contents = new char[size];
	pbuf->sgetn(contents,size);
	istr.close();
	std::cout.write(contents,size);
    }

    return 0;
}
