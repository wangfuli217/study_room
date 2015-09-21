// template version of template6.cpp
#include <iostream>
using namespace std;

template<typename T>
class MyArray
{
public:
    MyArray(size_t size) : mSize(size), mArray(nullptr)
    {
	mArray = new T[size];
    }

    virtual ~MyArray()
    {
	if(mArray)
	{
	    delete [] mArray;
	    mArray = nullptr;
	}
    }

    size_t getSize() const
    {
	return mSize;
    }

    T& at(size_t index) throw(out_of_range)
    {
	if(index >= 0 && index < getSize())
	{
	    return mArray[index];
	}
	else
	{
	    throw out_of_range("MyArray::at : Index out of range.");
	}
    }
protected:
    size_t mSize;
    T * mArray;
};

int main()
{
    MyArray<int> arr(10);

    cout << "Array size : " << arr.getSize() << endl;
    arr.at(3) = 42;
    cout << "arr[3] = " << arr.at(3) << endl;

    try
    {
	arr.at(10) = 3;
    }
    catch(const out_of_range& e)
    {
	cout << "Caught exception : (" << e.what() << ")" << endl;
    }

    MyArray<string> arrString(5);
    cout << "Array size : " << arrString.getSize() << endl;
    arrString.at(3) = "This is a test";
    cout << "arr[3] = " << arrString.at(3) << endl;

    try
    {
	arrString.at(10) = 3;
    }
    catch(const exception& e)
    {
	cout << "Caught exception : (" << e.what() << ")" << endl;
    }
}
