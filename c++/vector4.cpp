#include <iostream>
#include <vector>
#include <exception>
using namespace std;

int main()
{
    try
    {
	vector<int> v;

	cout << "size : " << v.size() << ", capacity : " << v.capacity() << endl;

	v.reserve(100);
	cout << "size : " << v.size() << ", capacity : " << v.capacity() << endl;

	v.resize(10);
	cout << "size : " << v.size() << ", capacity : " << v.capacity() << endl;

	v.at(11) = 11;
	cout << "size : " << v.size() << ", capacity : " << v.capacity() << endl;
    }
    // catch(out_of_range& e)
    // {
    // 	cerr << "out_of_range : " << e.what() << endl; 
    // }
    catch(exception& e)
    {
	cerr << "exception : " << e.what() << endl; 
    }

    return 0;
}
