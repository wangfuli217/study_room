#include "SpreadsheetCell.h"
#include <iostream>
#include <sstream>
using namespace std;

SpreadsheetCell::SpreadsheetCell()
{
    mValue = 0;
}

SpreadsheetCell::SpreadsheetCell(double initialValue)
{
    setValue(initialValue);
}

double SpreadsheetCell::stringToDouble(string inString) const
{
    double temp;
    istringstream istr(inString);
    istr >> temp;
    if(istr.fail() || !istr.eof())
    {
	return 0;
    }

    return temp;
}

/*
void SpreadsheetCell::setString(string inString)
{
    mString = inString;
    mValue = stringToDouble(mString);
}
*/

void SpreadsheetCell::setString(const string& inString)
{
    mString = inString;
    mValue = stringToDouble(mString);
}

string SpreadsheetCell::doubleToString(double inValue) const
{
    ostringstream ostr;
    ostr << inValue;
    return ostr.str();
}

SpreadsheetCell::SpreadsheetCell(string initialValue)
{
    setString(initialValue);
}

SpreadsheetCell::SpreadsheetCell(const string& initialValue)
{
    setString(initialValue);
}

void SpreadsheetCell::setValue(double inValue)
{
    mValue = inValue;
    mString = doubleToString(mValue);
}

double SpreadsheetCell::getValue() const
{
    return mValue;
}

string SpreadsheetCell::getString() const
{
    return mString;
}

int main()
{
    SpreadsheetCell myCell(5), anotherCell(4);

    cout << "cell 1 : " << myCell.getValue() << endl;
    cout << "cell 2 : " << anotherCell.getValue() << endl;

    SpreadsheetCell *myCellp = new SpreadsheetCell(5);
    SpreadsheetCell *anotherCellp = nullptr;
    anotherCellp = new SpreadsheetCell(4);

    cout << "cellp 1 : " << myCellp->getValue() << endl;
    cout << "cellp 2 : " << (*anotherCellp).getValue() << endl;

    delete myCellp;
    myCellp = nullptr;
    delete anotherCellp;
    anotherCellp = nullptr;

    return 0;
}
