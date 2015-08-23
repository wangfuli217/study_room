#include <iostream>
#include <thread>

using namespace std;

void f()
{
    cout << "thread1...." << endl;
}

struct F
{
    void operator()() { cout << "thread2..." << endl; }
};

void user()
{
    thread t1 {f};
    thread t2 {F()};

    t1.join();
    t2.join();
}

int main()
{
    user();
}
