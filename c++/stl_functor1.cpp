#include <iostream>
using namespace std;

struct LessFunctor
{
    mutable int count = 0;
public:
    LessFunctor(int n=0):count(n) {}
    bool operator()(int left, int right) const
	{
	    ++count;
	    return left < right;
	}
    int get_count() const { return count; }
};

bool LessFun(int left, int right)
{
    return left < right;
}

int main()
{
    bool (*LessPtr)(int,int) = LessFun;
    LessFunctor lessFunctor;

    cout << lessFunctor(10,20) << endl;
    cout << lessFunctor(10,20) << endl;
    cout << lessFunctor(10,20) << endl;
    cout << "get_count : " << lessFunctor.get_count() << endl;

    cout << LessFun(10,20) << endl;

    cout << LessPtr(10,20) << endl;

    return 0;
}
