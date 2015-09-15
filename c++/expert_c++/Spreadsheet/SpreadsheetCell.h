#include <string>
using std::string;

class SpreadsheetCell
{
public:
    SpreadsheetCell();
    SpreadsheetCell(double initialValue);
    SpreadsheetCell(string initialValue);
    SpreadsheetCell(const string& initialValue);
    void setValue(double inValue);
    inline double getValue() const;
    //void setString(string inString);
    void setString(const string& inString);
    inline string getString() const;
protected:
    string doubleToString(double inValue) const;
    double stringToDouble(string inString) const;
    //double stringToDouble(const string& inString) const;
    double mValue;
    string mString;
};
