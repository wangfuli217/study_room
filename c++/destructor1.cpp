#include <iostream>
using namespace std;

class SpreadsheetCell
{
public:
    SpreadsheetCell() = default;
    SpreadsheetCell(int v) : value(v) {}
    int getValue() const { return value; }

private:
    int value;
};

int main()
{
    SpreadsheetCell * cellPtr1 = new SpreadsheetCell(5);
    SpreadsheetCell * cellPtr2 = new SpreadsheetCell(6);

    cout << "cellPtr1 : " << cellPtr1->getValue() << endl;
    delete cellPtr1;
    cellPtr1 = nullptr;

    return 0;
}
