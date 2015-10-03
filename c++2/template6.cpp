#include <iostream>
using namespace std;

template<typename T, const T INIT>
class myClass
{
public:
    myClass();
    myClass(const myClass<T,INIT>& src);
    myClass<T,INIT>& operator=(const myClass<T,INIT>& rhs);
    const T get_val() const { return mVal; }
protected:
    T mVal;
};

template<typename T, const T INIT>
myClass<T,INIT>::myClass()
{
    mVal = INIT;
}

template<typename T, const T INIT>
myClass<T,INIT>::myClass(const myClass<T,INIT>& src)
{
    mVal = src.mVal;
}

template<typename T, const T INIT>
myClass<T,INIT>& myClass<T,INIT>::operator=(const myClass<T,INIT>& rhs)
{
    if(this == &rhs)
    {
        return *this;
    }
    mVal = rhs.mVal;
    return *this;
}

int main()
{
    myClass<int,10> c1;
    myClass<int,1> c2 = c1;

    cout << c1.get_val() << endl;
    cout << c2.get_val() << endl;
}
