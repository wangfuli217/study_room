#include <vector>
#include <iostream>
#include <cassert>

using namespace std;

void shuffle_data( vector<int>& v);
void ready_test( int            argc,
                 char         * argv[],
                 vector<int>&   v );

#define get_max( a, b ) ( (a) > (b) ? (a) : (b) )
