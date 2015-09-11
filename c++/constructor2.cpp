class SpreadsheetCell
{
public:
    SpreadsheetCell(double d);
};

class SomeClass
{
public:
    SomeClass();
protected:
    SpreadsheetCell mCell;
};

SomeClass::SomeClass() : mCell(1.0)
{
}

SpreadsheetCell::SpreadsheetCell(double d)
{
}

int main()
{
    SomeClass s;
}
