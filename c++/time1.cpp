#include <iostream>
#include <ctime>
#include <ratio>
#include <chrono>

int main()
{
    using namespace std::chrono;

    // now function returns time_point
    high_resolution_clock::time_point t1 = high_resolution_clock::now();

    std::cout << "printing out 1000 stars...\n";
    for(int i=0; i<1000; ++i)
    {
        std::cout << "*";
    }
    std::cout << std::endl;

    high_resolution_clock::time_point t2 = high_resolution_clock::now();

    duration<double> time_span = duration_cast<duration<double>>(t2-t1);

    std::cout << "It took me " << time_span.count() << " seconds.";
    std::cout << std::endl;
    std::cout << "It took me... " << duration_cast<milliseconds>(t2-t1).count() << " msec.";
    std::cout << std::endl;

    return 0;
}
