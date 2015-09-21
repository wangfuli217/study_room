#include <iostream>
#include <vector>
using namespace std;

template<typename T>
class RoundRobin
{
public:
    RoundRobin(int numExpected = 0);
    virtual ~RoundRobin();
    void add(const T& elem);
    void remove(const T& elem);
    T& getNext() throw(std::out_of_range);
protected:
    std::vector<T> mElems;
    typename std::vector<T>::iterator mCurElem;
private:
    RoundRobin(const RoundRobin& src);
    RoundRobin& operator=(const RoundRobin& rhs);
};

template<typename T>
RoundRobin<T>::RoundRobin(int numExpected)
{
    mElems.reserve(numExpected);
    mCurElem = mElems.begin();
}

template<typename T>
RoundRobin<T>::~RoundRobin()
{
}

template<typename T>
void RoundRobin<T>::add(const T& elem)
{
    int pos = mCurElem - mElems.begin();
    mElems.push_back(elem);
    mCurElem = mElems.begin() + pos;
}

template<typename T>
void RoundRobin<T>::remove(const T& elem)
{
    for(auto it = mElems.begin(); it!=mElems.end(); ++it)
    {
	if(*it == elem)
	{
	    int newPos;
	    if(mCurElem <= it)
	    {
		newPos = mCurElem - mElems.begin();
	    }
	    else
	    {
		newPos = mCurElem - mElems.begin() - 1;
	    }

	    mElems.erase(it);
	    mCurElem = mElems.begin() + newPos;

	    if(mCurElem == mElems.end())
	    {
		mCurElem = mElems.begin();
	    }

	    return;
	}
    }
}

template<typename T>
T& RoundRobin<T>::getNext() throw(std::out_of_range)
{
    if(mElems.empty())
    {
	throw std::out_of_range("No elements in the list");
    }

    T& retVal = *mCurElem;
    ++mCurElem;
    if(mCurElem == mElems.end())
    {
	mCurElem = mElems.begin();
    }

    return retVal;
}

class Process
{
public:
    Process(const string& name) : mName(name) {}
    void doWorkDuringTimeSlice()
    {
	cout << "Process " << mName << "performing work during time slice." << endl;
    }

    bool operator==(const Process& rhs)
    {
	return mName == rhs.mName;
    }
protected:
    string mName;
};

class Scheduler
{
public:
    Scheduler(const vector<Process>& processes);
    void scheduleTimeSlice();
    void removeProcess(const Process& process);
protected:
    RoundRobin<Process> rr;
};

Scheduler::Scheduler(const vector<Process>& processes)
{
    for(auto& process : processes)
    {
	rr.add(process);
    }
}

void Scheduler::scheduleTimeSlice()
{
    try
    {
	rr.getNext().doWorkDuringTimeSlice();
    }
    catch(const out_of_range&)
    {
	cerr << "No more processes to schedule." << endl;
    }
}

void Scheduler::removeProcess(const Process& process)
{
    rr.remove(process);
}

int main()
{
    vector<Process> processes = {Process("1"), Process("2"), Process("3")};
    Scheduler sched(processes);

    for(int i=0; i<4; ++i)
	sched.scheduleTimeSlice();

    sched.removeProcess(processes[1]);
    cout << "Removed second process" << endl;

    for(int i=0; i<4; ++i)
	sched.scheduleTimeSlice();

    return 0;
}
