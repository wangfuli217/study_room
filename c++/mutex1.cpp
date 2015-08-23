// unique_lock using mutex
// http://www.cplusplus.com/reference/mutex/unique_lock/?kw=unique_lock
#include <iostream>
#include <thread>
#include <mutex>

std::mutex mtx;

void print_block(int n, char c)
{
    std::unique_lock<std::mutex> lck(mtx);

    for(int i=0; i<n; ++i)
    {
	std::cout << c;
	std::cout << "\n";
    }

    // destructor releases the mutex leaving this function
}

int main()
{
    std::thread th1 (print_block,50,'*');
    std::thread th2 (print_block,50,'$');

    th1.join();
    th2.join();

    return 0;
}
    
