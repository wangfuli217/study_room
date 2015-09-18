#include <iostream>
#include <vector>
using namespace std;

#define COPY 1

#ifdef COPY
template<typename T>
void swapCopy(T& a, T& b)
{
    T temp(a);
    a = b;
    b = temp;
}
#else
// better performance
template<typename T>
void swapMove(T& a, T& b)
{
    T temp(std::move(a));
    a = std::move(b);
    b = std::move(temp);
}
#endif

int main()
{
    vector<int> a = {10, 20, 30, 40, 50};
    vector<int> b = {1, 2, 3, 4, 5};

    cout << "a : ";
    for(auto i : a) cout << i << " ";
    cout << endl;

    cout << "b : ";
    for(auto i : b) cout << i << " ";
    cout << endl;

    for(vector<int>::size_type i=0; i<a.size(); ++i)
    {
	#ifdef COPY
	swapCopy(a[i], b[i]);
	#else
	swapMove(a[i], b[i]);
	#endif
    }

    cout << "a : ";
    for(auto i : a) cout << i << " ";
    cout << endl;

    cout << "b : ";
    for(auto i : b) cout << i << " ";
    cout << endl;

    return 0;
}
