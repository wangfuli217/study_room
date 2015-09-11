#include <iostream>
#include <stdexcept>
#include <exception>
#include "Database.h"

using namespace std;

namespace Records
{
    Database::Database()
    {
	mNextEmployeeNumber = kFirstEmployeeNumber;
    }

    Database::~Database()
    {
    }

    Employee& Database::addEmployee(string inFirstName, string inLastName)
    {
	Employee theEmployee;
	theEmployee.setFirstName(inFirstName);
	theEmployee.setLastName(inLastName);
	theEmployee.setEmployeeNumber(mNextEmployeeNumber++);
	theEmployee.hire();
	mEmployees.push_back(theEmployee);
	return mEmployees[mEmployees.size()-1];
    }

    Employee& Database::getEmployee(int inEmployeeNumber)
    {
	for(auto iter = mEmployees.begin(); iter!=mEmployees.end(); ++iter)
	{
	    if(iter->getEmployeeNumber() == inEmployeeNumber)
	    {
		return *iter;
	    }
	}
	cerr << "No employee with number " << inEmployeeNumber << endl;
	//throw exception;
	return *mEmployees.end();
    }

    void Database::displayAll() const
    {
	for(auto iter=mEmployees.begin(); iter!=mEmployees.end(); ++iter)
	{
	    iter->display();
	}
    }

    void Database::displayCurrent() const
    {
	for(auto iter=mEmployees.begin(); iter!=mEmployees.end(); ++iter)
	{
	    if(iter->getIsHired())
	    {
		iter->display();
	    }
	}
    }
}
