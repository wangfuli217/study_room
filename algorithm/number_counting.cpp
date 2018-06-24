/*
구글 입사문제
1부터 10,000까지 8이라는 숫자가 총 몇번 나오는가?

8이 포함되어 있는 숫자의 갯수를 카운팅 하는 것이 아니라 8이라는 숫자를 모두 카운팅 해야 한다.
(※ 예를들어 8808은 3, 8888은 4로 카운팅 해야 함)
*/

#include <iostream>

using namespace std;

int get_count( int num )
{
    int extra, count = 0;

    while( num != 0 )
    {
        extra = num % 10;
        if( extra == 8 )
        {
            count++;
        }

        num /= 10;
    }

    return count;
}

int main()
{
    int total_count = 0;

    for(int i=1; i<=10000; i++)
    {
        total_count += get_count(i);
    }

    cout << "total count of 8 : " << total_count << endl;

    return 0;
}

/*
 * 이런 문제는 코딩보다는 수학풀이로 접근.
 * xxx8  ->  1000
 * xx8x  ->  1000
 * x8xx  ->  1000
 * 8xxx  ->  1000
 * total 4000
 *
 * 0000 ~ 9999 : 숫자 10000 x 4 개에 10 개의 숫자가 골고루... 따라서 4000 개
 */
