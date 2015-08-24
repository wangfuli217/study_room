#include <iostream>
#include <thread>
#include <string>
#include <queue>
#include <mutex>
#include <condition_variable>

using namespace std;

class Message
{
    const string ss = "11111";
};

queue<Message> mqueue;
condition_variable mcond;
mutex mmutex;

void consumer()
{
    while(true)
    {
	unique_lock<mutex> lck(mmutex);
	mcond.wait(lck);

	auto m = mqueue.front();
	mqueue.pop();
	lck.unlock();

	cout << "pop..." << endl;
	break;
    }
}

void producer()
{
    while(true)
    {
	Message m;

	unique_lock<mutex> lck(mmutex);
	mqueue.push(m);
	mcond.notify_one();

	cout << "push..." << endl;
	break;
    }
}

int main()
{
    thread t1(consumer);
    thread t2(producer);

    t1.join();
    t2.join();
}
