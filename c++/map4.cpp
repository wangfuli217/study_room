#include <iostream>
#include <map>
using namespace std;

class Data
{
public:
    Data(int val = 0) { mVal = val; }
    int getVal() const { return mVal; }
    void setVal(int val) { mVal = val; }
protected:
    int mVal;
};

int main()
{
    map<int,Data> dataMap;
    return 0;
}
