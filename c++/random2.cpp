#include <iostream>
#include <random>
#include <vector>

using namespace std;

class Rand_int
{
public:
    Rand_int(int low, int high):dist(low,high) {}
    int operator()() { return dist(re); }
private:
    default_random_engine re;
    uniform_int_distribution<> dist;
};

int main()
{
    Rand_int rnd(0,4);

    vector<int> histogram(5);
    for(int i=0; i!=200; ++i)
	++histogram[rnd()];

    for(int i=0; i!=histogram.size(); ++i)
    {
	cout << i << '\t';
	for(int j=0; j!=histogram[i]; ++j) cout << '*';
	cout << endl;
    }
}
