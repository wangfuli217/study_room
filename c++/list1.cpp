#include <iostream>
#include <list>
#include <string>

using namespace std;

struct Entry
{
    string name;
    int number;
};

list<Entry> phone_book = {
    {"David Hume", 123456},
    {"Karl Popper", 234567},
    {"Bertrand", 3456789}
};

// p.99
int get_number(const string& s)
{
    for(const auto& x : phone_book)
	if(x.name == s)
	    return x.number;

    return 0;
}

// p.99
int get_number1(const string& s)
{
    for(auto p = phone_book.begin(); p!=phone_book.end(); ++p)
	if(p->name == s)
	    return p->number;

    return 0;
}

// p.99
list<Entry>::iterator get_iter(const string& s)
{
    list<Entry>::iterator p;

    for(p=phone_book.begin(); p!=phone_book.end(); ++p)
    {
	if(p->name == s)
	{
	    return p;
	}
    }

    return p;
}

void show_list()
{
    for(const auto& x : phone_book)
	cout << x.name << "," << x.number << endl;
}

void f_insert(const Entry& ee, list<Entry>::iterator p)
{
    phone_book.insert(p,ee);
}

void f_erase(list<Entry>::iterator q)
{
    phone_book.erase(q);
}

int main()
{
    cout << "==========================" << endl;
    int idx = get_number("Bertrand");
    cout << idx << endl;

    idx = get_number1("Bertrand");
    std::cout << idx << endl;

    cout << "==========================" << endl;
    cout << "add new entry" << endl;
    list<Entry>::iterator p = get_iter("Bertrand");
    Entry new_entry = {"dplee",77777};
    f_insert(new_entry, p);
    show_list();

    cout << "==========================" << endl;
    cout << "erase entry" << endl;
    p = get_iter("dplee");
    f_erase(p);
    show_list();
}
