#include <iostream>
#include <queue>
#include <string>
using namespace std;

class Error
{
public:
    Error(int priority, const std::string& errMsg)
	: mPriority(priority), mError(errMsg) {}
    int getPriority() const { return mPriority; }
    std::string getErrorString() const { return mError; }
    friend bool operator<(const Error& lhs, const Error& rhs);
    friend std::ostream& operator<<(std::ostream& os, const Error& err);
protected:
    int mPriority;
    std::string mError;
};

class ErrorCorrelator
{
public:
    ErrorCorrelator() {}
    void addError(const Error& error);
    Error getError() throw(std::out_of_range);
protected:
    std::priority_queue<Error> mErrors;
};

bool operator<(const Error& lhs, const Error& rhs)
{
    return (lhs.mPriority < rhs.mPriority);
}

ostream& operator<<(ostream& os, const Error& err)
{
    os << err.mError << " (priority " << err.mPriority << ")";
    return os;
}

void ErrorCorrelator::addError(const Error& error)
{
    mErrors.push(error);
}

Error ErrorCorrelator::getError() throw(out_of_range)
{
    if(mErrors.empty())
    {
	throw out_of_range("No elements!");
    }

    Error top = mErrors.top();
    mErrors.pop();

    return top;
}

int main()
{
    ErrorCorrelator ec;
    ec.addError(Error(3, "Unable to read file"));
    ec.addError(Error(1, "Incorrect entry from user"));
    ec.addError(Error(10, "Unable to allocate memory"));

    while(true)
    {
	try
	{
	    Error e = ec.getError();
	    cout << e << endl;
	}
	catch(const out_of_range&)
	{
	    cout << "Finished processing errors" << endl;
	    break;
	}
    }
}
