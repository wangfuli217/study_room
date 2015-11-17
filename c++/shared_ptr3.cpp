#include <iostream>
#include <map>

using namespace std;

class Test
{
public:
    Test(string n):name(n) { cout << name << " : Test constructor..." << endl; }
    ~Test() { cout << name << " : Test destructor..." << endl; }
    string get_name() { return name; }
private:
    string name;
};

int main()
{
    map<int,shared_ptr<Test>> m;

    for(int i=0; i<10; ++i)
    {
        shared_ptr<Test> s(new Test(to_string(i)));
        m.insert(make_pair(i,s));
    }

    cout << "============" << endl;
    for(auto i : m)
        cout << i.first << " : " << i.second->get_name() << endl;

    cout << "============" << endl;
    m.erase(0);
    m.erase(1);
    m.erase(2);
    cout << "============" << endl;

    return 0;
}
