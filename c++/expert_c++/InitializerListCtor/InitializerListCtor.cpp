#include <iostream>
#include <vector>

using namespace std;

class PointSequence
{
public:
    PointSequence(initializer_list<double> args)
    {
	cout << "size : " << args.size() << endl;
	if(args.size() % 2 != 0)
	{
	    throw invalid_argument("initializer_list should"
				   "contain even number of elements.");
	}

	for(auto iter = args.begin(); iter != args.end(); ++iter)
	{
	    mVecPoints.push_back(*iter);
	}
    }

    void dumpPoints() const
    {
	for(auto citer = mVecPoints.cbegin(); citer != mVecPoints.cend(); citer += 2)
	{
	    cout << "(" << *citer << "," << *(citer+1) << ")" << endl;
	}
    }

protected:
    vector<double> mVecPoints;
};

int main()
{
    initializer_list<double> ll = {1.0, 2.0, 3.0, 4.0, 5.0, 6.0};
    
    PointSequence p1 = {1.0, 2.0, 3.0, 4.0, 5.0, 6.0};
    p1.dumpPoints();

    PointSequence p3 = ll;
    p3.dumpPoints();

    PointSequence p4(ll);
    p3.dumpPoints();

    try
    {
	PointSequence p2 = {1.0, 2.0, 3.0};
    }
    catch(const invalid_argument& e)
    {
	cout << e.what() << endl;
    }
}
