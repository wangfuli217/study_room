#include <iostream>
#include <random>
#include <thread>

using namespace std;
using namespace std::chrono;

int main()
{
    using my_engine = default_random_engine;
    using my_distribution = uniform_int_distribution<>;

    my_engine re{};
    my_distribution one_to_six{1,6};
    auto die = bind(one_to_six,re);

    int x;

    while(1)
    {
        x = die();
        cout << x << endl;
        this_thread::sleep_for(milliseconds(1000));
    }
}
