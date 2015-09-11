#include <iostream>
#include <string>

using namespace std;

class in_obj
{
public:
    in_obj() = default;
    in_obj(int x) : val(x) {}
    int get_value() { return val; }
private:
    int val;
};

class Test
{
public:
    Test() = default;
    Test(const string s, in_obj* o) : str(s), m_obj(o) {}
    Test(const Test& t);
    ~Test();
    in_obj * get_address() { return m_obj; }
private:
    string str;
    in_obj * m_obj;
};

Test::Test(const Test& s)
{
    str = s.str;
    m_obj = s.m_obj;

    cout << "copy constructor..." << endl;
}

Test::~Test()
{
    delete m_obj;

    cout << "destructor..." << endl;
}

// copy constructor called automatically for parameter
// must use reference
void printTest(Test o)
{
    cout << "printTest" << endl;

    // Test object destructed automatically
    // So m_obj memory is deleted here
}

int main()
{
    in_obj * test_obj = new in_obj(777);

    cout << "test_obj->get_value() : " << test_obj->get_value() << endl;

    Test t1("shallow copy1", test_obj);

    cout << "address before destructor.. : " << t1.get_address() << endl;

    printTest(t1);

    cout << "address after destructor.. : " << t1.get_address() << endl;

    // error here
    cout << "2 test_obj->get_value() : " << test_obj->get_value() << endl;
}
