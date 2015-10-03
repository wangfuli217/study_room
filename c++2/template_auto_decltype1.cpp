#include <iostream>
#include <string>
using namespace std;

class MyInt;
class MyString;
class MyInt
{
public:
    MyInt(int i) : m_i(i) {}
    MyInt operator+(const MyString& rhs) const;
    int getInt() const { return m_i; }
protected:
    int m_i;
};

class MyString
{
public:
    MyString(string str) : m_str(str) {}
    MyString operator+(const MyInt& rhs) const;
    const string& getString() const { return m_str; }
protected:
    string m_str;
};

MyInt MyInt::operator+(const MyString& rhs) const
{
    return m_i + stoi(rhs.getString());
}

MyString MyString::operator+(const MyInt& rhs) const
{
    string str = m_str;
    str.append(to_string(rhs.getInt()));
    return str;
}

template<typename T1, typename T2, typename Result>
Result DoAddition(const T1& t1, const T2& t2)
{
    return t1 + t2;
}

template<typename T1, typename T2>
auto DoAddition2(const T1& t1, const T2& t2) -> decltype(t1+t2)
{
    return t1 + t2;
}
    
int main()
{
    string str = "10";
    auto ret = DoAddition<MyInt,MyString,MyInt>(1,str);
    cout << "int + string = int : " << ret.getInt() << endl;

    str = "100";
    auto ret1 = DoAddition<MyString,MyInt,MyString>(str,11);
    cout << "string + int = string : " << ret1.getString() << endl;

    cout << "================" << endl;

    MyInt i(11);
    MyString s("100");
    auto ret2 = DoAddition2(i,s);
    cout << "int + string = int : " << ret2.getInt() << endl;

    auto ret3 = DoAddition2(s,i);
    cout << "string + int = string : " << ret3.getString() << endl;

    return 0;
}
