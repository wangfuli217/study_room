#include <iostream>
using namespace std;

class Rational
{
public:
    Rational(int numerator=0, int denominator=1):num(numerator),denom(denominator) {}
    int numerator() const { return num; }
    int denominator() const { return denom; }
    const Rational operator*(const Rational& rhs)
    {
	// don't make temporary object
	// Just call constructor
	return Rational(num*rhs.numerator(),
			denom*rhs.denominator());
    }
    /*
    const Rational operator*(const Rational& lhs, const Rational& rhs)
    {
	return Rational(lhs.numerator()*rhs.numerator(),
			lhs.denominator()*rhs.denominator());
    }
    */
    Rational& operator=(const Rational& rhs)
    {
	if(this == &rhs)
	{
	    return *this;
	}

	num = rhs.numerator();
	denom = rhs.denominator();

	return *this;
    }
private:
    int num;
    int denom;
};

int main()
{
    Rational  x(10,1);
    Rational  y(20,2);

    Rational z = x * y;
    cout << z.numerator() << ", " << z.denominator() << endl;
}
