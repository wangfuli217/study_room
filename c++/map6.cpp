#include <iostream>
#include <map>
using namespace std;

class Data
{
public:
    Data() { cout << "default constructor" << endl; }
    Data(int v) : val(v) { cout << "int constructor" << endl; }
    int get_val() const { return val; }
private:
    int val;
};

void callmap(const map<int,Data>& m)
{
    //cout << m[1] << endl;  // compile error
    auto iter = m.find(1);
    if(iter != m.end())
        cout << iter->second.get_val() << endl;
}

int main()
{
    map<int,Data> dataMap;

    auto ret = dataMap.insert({1,Data(4)});
    if(ret.second)
    {
        cout << "Insert succeeded!" << endl;
    }
    else
    {
        cout << "Insert failed!" << endl;
    }

    callmap(dataMap);
}
