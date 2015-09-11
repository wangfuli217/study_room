#include "Spreadsheet.h"

Spreadsheet::Spreadsheet(int inWidth, int inHeight) : mWidth(inWidth), mHeight(inHeight)
{
    mCells = new SpreadsheetCell* [mWidth];
    for(int i=0; i<mWidth; i++)
    {
	mCells[i] = new SpreadsheetCell[mHeight];
    }
}

Spreadsheet::~Spreadsheet()
{
    for(int i=0; i<mWidth; i++)
    {
	delete [] mCells[i];
    }

    delete [] mCells;
    mCells = nullptr;
}

void Spreadsheet::setCellAt(int x, int y, const SpreadsheetCell& cell)
{
    if(!inRange(x,mWidth) || !inRange(y,mHeight))
    {
	throw std::out_of_range("");
    }
    mCells[x][y] = cell;
}

SpreadsheetCell Spreadsheet::getCellAt(int x, int y)
{
    if( !inRange(x,mWidth) || !inRange(y,mHeight))
    {
	throw std::out_of_range("");
    }
    return mCells[x][y];
}
