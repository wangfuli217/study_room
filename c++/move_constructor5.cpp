#include <iostream>
#include <vector>
using namespace std;

class Element
{
public:
    Element(int i, string str) : mI(i), mStr(str) {}
    int get_int() const { return mI; }
    string get_str() const { return mStr; }
protected:
    int mI;
    string mStr;
};

int main()
{
    vector<Element> vec;

    Element myElement(12, "Twelve");
    // copy construction occurs when element is inserted into vec
    vec.push_back(myElement);
    for(auto& i : vec) cout << i.get_int() << ", " << i.get_str() << endl;

    cout << "---------" << endl;

    // Element(13, "Thirteen") is temporary object
    // move constructor -> better perf
    vec.push_back(Element(13, "Thirteen"));
    for(auto& i : vec) cout << i.get_int() << ", " << i.get_str() << endl;

    cout << "---------" << endl;

    // uniform initialize
    // move constructor -> better perf
    vec.push_back({14, "Fourteen"});
    for(auto& i : vec) cout << i.get_int() << ", " << i.get_str() << endl;

    return 0;
}
