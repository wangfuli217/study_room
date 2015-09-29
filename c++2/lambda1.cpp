#include <iostream>
using namespace std;

int main()
{
    []{ cout << "hello world" << endl; } ();

    string result = [](const string& str) -> string { return "Hello from " + str;}("second Lambda");
    cout << "Result : " << result << endl;

    result = [](const string& str) { return "Hello from " + str; } ("third lambda");
    cout << "Result : " << result << endl;

    auto fn = [](const string& str) { return "function ptr " + str; };
    cout << fn("call 1") << endl;
    cout << fn("call 2") << endl;
}
