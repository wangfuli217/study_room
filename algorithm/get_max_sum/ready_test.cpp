#include <vector>
#include <iostream>
#include "get_max_sum.h"

void ready_test( int            argc,
                 char         * argv[],
                 vector<int>&   v )
{
    if( argc < 2 )
    {
        cout << "usage : " << argv[0] << " vector_count" << endl;
        exit(0);
    }

    long vcount = atoi(argv[1]);

    v.reserve(vcount);

    for( int i=0; i<vcount; i++ )
    {
        v.push_back(i);
    }

    shuffle_data(v);
}
