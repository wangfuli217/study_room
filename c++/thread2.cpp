#include <iostream>
#include <vector>
#include <thread>

using namespace std;

void f(const vector<double>& v, double* res)
{
    for(auto p : v)
	cout << "thread1 : " << p << endl;
}

struct F
{
public:
    F(const vector<double>& vv, double* p):v(vv),res(p) {}
    void operator()()
	{
	    for(auto x : v)
		cout << "thread2 : " << x << endl;
	}

private:
    const vector<double>& v;
    double* res;
};

int main()
{
    vector<double> some_vec {1,2,3,4,5,6,7,8,9};
    vector<double> vec2 {10,11,12,13,14};
    double res1;
    double res2;

    thread t1 {f,some_vec,&res1};
    thread t2 {F(vec2,&res2)};

    t1.join();
    t2.join();

    cout << res1 << " " << res2 << endl;
}
