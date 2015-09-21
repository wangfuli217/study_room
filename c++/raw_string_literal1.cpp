#include <iostream>
#include <string>
using namespace std;

int main()
{
    string rstr = R"(Line 1
line "2" \t (and)
end)";

    cout << rstr << endl;
}
