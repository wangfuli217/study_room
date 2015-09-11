#include <iostream>
using namespace std;

class SpreadsheetCell
{
public:
    SpreadsheetCell() = default;
    SpreadsheetCell(int v, string s) : value(v), str(s) {}
    int getValue() const { return value; }
    string getString() const { return str; }
    SpreadsheetCell& operator=(const SpreadsheetCell& rhs)
    {
	if(this == &rhs)
	{
	    return *this;
	}

	value = rhs.value;
	str = rhs.str;

	cout << "operator= called..." << endl;

	return *this;
    }

private:
    int value;
    string str;
};

int main(int)
{
    SpreadsheetCell cell1(5, "555");
    cout << cell1.getValue() << ", " << cell1.getString() << endl;

    SpreadsheetCell cell2;

    cell2 = cell1;
    cout << cell2.getValue() << ", " << cell2.getString() << endl;

    cell2 = cell2;
    cout << cell2.getValue() << ", " << cell2.getString() << endl;

    SpreadsheetCell cell3(333, "333");
    string s1;
    s1 = cell3.getString();
    cout << "s1 : " << s1 << endl;

    string s2 = cell3.getString();

    return 0;
}
