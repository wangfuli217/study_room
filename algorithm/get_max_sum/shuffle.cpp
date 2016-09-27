#include "get_max_sum.h"

void shuffle_data( vector<int>& v )
{
    long  rnum;
    int   tmp;

    cout << "size : " << v.size() << ", capacity : " << v.capacity() << endl;

    srand((unsigned int)time(NULL));

    for( int i = v.size() - 1; i >= 0; i-- )
    {
        rnum = rand() % (i + 1);

        if( rnum % 2 == 0 )
        {
            tmp = v[i];
        }
        else
        {
            tmp = -v[i];
        }

        v[i] = v[rnum];
        v[rnum] = tmp;
    }

    for( auto& i : v )
    {
        cout << i << endl;
    }
    return;
}
