#include <iostream>
#include <iomanip>
using namespace std;

int main()
{
    bool myBool = true;

    cout << "This is the  default : " << myBool << endl;
    cout << "This should be true : " << boolalpha << myBool << endl;
    cout << "This should be 1 : " << noboolalpha << myBool << endl;

    int i = 123;

    printf("This should be ' 123' : %6d\n", i);
    cout << "This should be ' 123' : " << setw(6) << i << endl;

    cout << "===============" << endl;

    printf("This should be '000123' : %06d\n", i);
    cout << "This should be '000123' : " << setfill('0') << setw(6) << i << endl;

    cout << "This should be '***123' : " << setfill('*') << setw(6) << i << endl;
    cout << setfill(' ');

    cout << "===============" << endl;

    double dbl = 1.452;
    double dbl2 = 5;
    cout << "This should be ' 5' : " << setw(2) << noshowpoint << dbl2 << endl;
    cout << "This should be @@1.452 : " << setw(7) << setfill('@') << dbl << endl;

    cout << "===============" << endl;

    cout.imbue(locale(""));
    cout << "This is 1234567 formatted according to your location : " << 1234567 << endl;
    cout << "This should be a money amount of 1200, "
	 << "formatted according to your location : "
	 << put_money("120000") << endl;

    cout << "===============" << endl;
    
#if 0
    time_t tt;
    time(&tt);
    tm t;
    localtime_s(&t, &tt);
    cout << "This should be the current date and time "
	 << "formatted according to your location : "
	 << put_time(&t, "%c") << endl;
#endif

    return 0;
}
