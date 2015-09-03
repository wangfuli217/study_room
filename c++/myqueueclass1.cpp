#include <iostream>
using namespace std;

template<typename T>
class Queue
{
    T buf[100];
    int top, bottom;
public:
    Queue():top(0),bottom(0) {}
    void Push(const T& a)
	{
	    buf[top] = a;
	    top = (top + 1 ) % 100;
	}
    const T& Pop()
	{
	    int tmp = bottom;
	    bottom = (bottom + 1) % 100;
	    return buf[tmp];
	}

    bool Empty()
	{
	    return top == bottom;
	}
};

int main()
{
    Queue<int> q;

    q.Push(10);
    q.Push(20);
    q.Push(30);

    if(!q.Empty())
	cout << q.Pop() << endl;
    if(!q.Empty())
	cout << q.Pop() << endl;
    if(!q.Empty())
	cout << q.Pop() << endl;

    return 0;
}
