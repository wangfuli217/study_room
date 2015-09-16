// effective c++ item 9
// This is okay. Good method for Basic constructor logging

#include <iostream>
using namespace std;

class Basic
{
public:
    explicit Basic(const string& loginfo);
    void log_write(const string& loginfo) const;
};

Basic::Basic(const string& loginfo)
{
    cout << "Basic constructor..." << endl;
    log_write(loginfo);
}

void Basic::log_write(const string& loginfo) const
{
    cout << "Basic::log_write : " << loginfo << endl;
}

class Derived1 : public Basic
{
public:
    Derived1(const string& loginfo) : Basic(loginfo)
    {
	cout << "Derived1 constructor..." << endl;
    }
};

int main()
{
    string s("This is loginfo");

    Derived1  d(s);
}
