#include <iostream>
using namespace std;

static const size_t NOT_FOUND = (size_t)(-1);

template<typename T>
size_t Find(const T& value, T* arr, size_t size)
{
    for(size_t i=0; i<size; ++i)
    {
        if(arr[i] == value)
        {
            return i;
        }
    }
    return NOT_FOUND;
}

int main()
{
    // find from int array
    int x = 3, intArr[] = {1,2,3,4};
    size_t sizeIntArr = sizeof(intArr) / sizeof(int);
    size_t res;
    res = Find(x,intArr,sizeIntArr);
    res = Find<int>(x,intArr,sizeIntArr);
    if(res != NOT_FOUND)
    {
        cout << res << endl;
    }
    else
    {
        cout << "Not Found" << endl;
    }

    // find from double array
    double y = 3.3, doubleArr[] = {1.2,2.5,3.1,4.8};
    size_t sizeDoubleArr = sizeof(doubleArr) / sizeof(double);
    size_t result;
    result = Find(y,doubleArr,sizeDoubleArr);
    result = Find<double>(y,doubleArr,sizeDoubleArr);
    if(result != NOT_FOUND)
    {
        cout << result << endl;
    }
    else
    {
        cout << "Not Found" << endl;
    }
}
