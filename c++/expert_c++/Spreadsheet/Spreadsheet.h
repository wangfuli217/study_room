#include "SpreadsheetCell.h"

class SpreadsheetCell{
public:
    Spreadsheet(int inWidth, int inHeight);
    ~Spreadsheet();
    void setCellAt(int x, int y, const SpreadsheetCell& cell);
    SpreadsheetCell getCellAt(int x, int y);
protected:
    bool inRange(int val, int upper);
    int mWidth, mHeight;
    SpreadsheetCell ** mCells;
};
