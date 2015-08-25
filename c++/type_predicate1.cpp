#include <iostream>
#include <string>

using namespace std;

template<typename T>
constexpr bool Is_arithmetic()
{
    return std::is_arithmetic<T>::value;
}

template<typename Scalar>
class complex
{
    Scalar re, im;
public:
    static_assert(Is_arithmetic<Scalar>(), "Sorry, I only support complex of arithmetic types");
};

int main()
{
    bool b1 = Is_arithmetic<int>();
    bool b2 = Is_arithmetic<string>();

    cout << is_class<int>() << endl;
    cout << is_literal_type<int>() << endl;
    cout << is_class<string>() << endl;
}
