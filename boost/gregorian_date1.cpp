#include <boost/date_time/gregorian/gregorian.hpp>
#include <iostream>

int main()
{
	boost::gregorian::date d(2014,1,31);
	std::cout << d.year() << std::endl;

	return 0;
}
