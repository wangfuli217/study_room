// http://ideone.com/JbUkPq
// http://stackoverflow.com/questions/2808398/easily-measure-elapsed-time/32727459#32727459

#include <iostream>
#include <chrono>
using namespace std;
using namespace std::chrono;

template<typename TimeT = milliseconds>
struct measure
{
    template<typename F, typename ...Args>
    static typename TimeT::rep execution(F func, Args&&... args)
    {
        auto start = system_clock::now();

        // Now call the function with all the parameters you need.
        func(forward<Args>(args)...);

        auto duration = duration_cast<TimeT>(system_clock::now() - start);

        return duration.count();
    }
};

struct functor
{
	int state;
	functor(int state) : state(state) {}
	void operator()() const
	{
		cout << "In functor run for ";
	}
};

void func()
{
	cout << "In function, run for ";
}


int main() 
{
	int dummy(3);
	
	cout << measure<nanoseconds>::execution( [&dummy]() 
	{  
		dummy *= 2; // usage with lambdas
		cout << "In lambda, run for ";
	}) << endl;
		
	cout << measure<nanoseconds>::execution(functor(dummy)) << endl;
	
	cout << measure<nanoseconds>::execution(func) << endl;
	
	return 0;
}
