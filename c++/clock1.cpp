#include <iostream>
#include <chrono>
#include <iomanip>
using namespace std;
using namespace std::chrono;

int main()
{
    system_clock::time_point tpoint = system_clock::now();
    time_t tt = system_clock::to_time_t(tpoint);
    tm * t = localtime(&tt);
    cout << put_time(t, "%H:%M:%S") << endl;
}
