#include <iostream>
#include <map>
#include <string>

int main()
{
    std::map<char,std::string> mymap;

    mymap['a'] = "an element";
    mymap['b'] = "another element";
    mymap['c'] = mymap['b'];

    std::cout << "mymap['a'] is " << mymap['a'] << std::endl;
    std::cout << "mymap['b'] is " << mymap['b'] << std::endl;
    std::cout << "mymap['c'] is " << mymap['c'] << std::endl;
    std::cout << "mymap['d'] is " << mymap['d'] << std::endl;

    if( mymap['d'] ==  )
    {
	std::cout << "null..." << std::endl;
    }

    std::cout << "mymap now contains " << mymap.size() << " elements." << std::endl;

    return 0;
}
