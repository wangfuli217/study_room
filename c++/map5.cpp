#include <iostream>
#include <map>
using namespace std;

class Data
{
public:
    Data() { cout << "default constructor" << endl; }
    Data(int v) : val(v) { cout << "int constructor" << endl; }
private:
    int val;
};

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

    ret = dataMap.insert(make_pair(1,Data(6)));
    if(ret.second)
    {
        cout << "Insert succedded." << endl;
    }
    else
    {
        cout << "Insert failed!" << endl;
    }
}
