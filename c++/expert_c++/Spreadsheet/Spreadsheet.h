#include "SpreadsheetCell.h"

class Spreadsheet{
public:
    Spreadsheet(int inWidth, int inHeight);
    Spreadsheet(const Spreadsheet& src);
    Spreadsheet& operator=(const Spreadsheet& rhs);
    ~Spreadsheet();
    void setCellAt(int x, int y, const Spreadsheet& cell);
    SpreadsheetCell getCellAt(int x, int y);
private:
    void setCellAt(int x, int y, const SpreadsheetCell& cell);
    void copyFrom(const Spreadsheet& src);
protected:
    bool inRange(int val, int upper);
    int mWidth, mHeight;
    SpreadsheetCell ** mCells;
};
