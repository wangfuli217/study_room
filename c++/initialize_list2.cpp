// 이 코드에서 두번째 destructor 가 호출되는 이유를 알아내지 못했다.
// move constructor 에 대한 이해가 100 % 가 아닌 듯 하다.

#include <iostream>
#include <vector>
#include <initializer_list>
using namespace std;

class Test
{
public:
    Test(const Test& s)
    {
	str = s.get_str();
	cout << "copy constructor : " << str << endl;
    }
    Test(const Test&& s)
    {
	str = move(s.get_str());
	cout << "move constructor : " << str << endl;
    }
    Test(const string& s) : str(s)
    {
	cout << "constructor : " << s << endl;
    }
    ~Test()
    {
	cout << "destructor : " << str << endl;
    }
    string get_str() const { return str; }
protected:
    string str;
};

int main()
{
    // use move constructor because these are temporary objects.
    vector<Test> v = { string("111"), string("222"), string("333")};

    for(auto& i : v) cout << i.get_str() << endl;
}
