#include "get_max_sum.h"

int main(int argc, char * argv[])
{
    vector<int>  v;

    int max_sum, cur_sum;

    ready_test(argc, argv, v);

    /*
     * O(N^2)
     */
    max_sum = 0;
    cur_sum = 0;

    for( int i = 0; i<v.size(); i++)
    {
        cur_sum = 0;

        for( int j = i; j < v.size(); j++)
        {
            cur_sum += v[j];
            max_sum = max( max_sum, cur_sum );
        }
    }

    int algo1 = max_sum;

    cout << "algo1 : max_sum : " << max_sum << endl;

    /*
     * O(N)
     */
    max_sum = 0;
    cur_sum = 0;

    for( int i = 0; i < v.size(); i++)
    {
        cur_sum = get_max(cur_sum, 0) + v[i];
        max_sum = get_max(max_sum, cur_sum);
    }

    int algo2 = max_sum;

    cout << "algo2 : max_sum : " << max_sum << endl;

    /*
     * Compare Answers of Each Algorithm
     */
    assert( algo1 == algo2 );
    
    return 0;
}
