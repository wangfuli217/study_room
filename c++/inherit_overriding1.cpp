#include <iostream>
using namespace std;

class Book
{
public:
    virtual string getDescription() { return "Book"; }
    virtual int getHeight() { return 120; }
};

class PaperBack : public Book
{
public:
    virtual string getDescription()
    {
	return "PaperBack " + Book::getDescription();
    }
};

class Romance : public PaperBack
{
public:
    virtual string getDescription()
    {
	return "Romance " + PaperBack::getDescription();
    }
    virtual int getHeight() { return PaperBack::getHeight() / 2; }
};

class Technical : public Book
{
public:
    virtual string getDescription()
    {
	return "Technical " + Book::getDescription();
    }
};

int main()
{
    Romance novel;
    Book book;

    cout << novel.getDescription() << endl;
    cout << book.getDescription() << endl;
    cout << novel.getHeight() << endl;
    cout << book.getHeight() << endl;

    return 0;
}
