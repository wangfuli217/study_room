/*
프로젝트 오일러라고 들어보셨나요?
프로그래밍 퀴즈를 풀이하는 유명한 곳인데요..
그곳에 있는 첫번째 문제를 이곳 코딩도장에 한번 소개해 볼까 합니다.

http://projecteuler.net/problem=1

[문제]

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000.

[번역]

10미만의 자연수에서 3과 5의 배수를 구하면 3,5,6,9이다. 이들의 총합은 23이다.
1000미만의 자연수에서 3,5의 배수의 총합을 구하라.

정답은 위 사이트에서 직접 확인 가능합니다.
*/

/*
 * 뭐 쭈욱 돌면서 더하는게 코딩으로는 더 쉽지만, 수학적인 지식을 활용했음.
 * 가우스가 풀었던 방법으로.
 */
#include <iostream>

using namespace std;

long long get_sum_of_multiples( long long num, long long divisor )
{
    long long sum = 0;
    long long last_multiple = (num / divisor) * divisor;
    long long multiple_count = last_multiple / divisor;

    if( multiple_count % 2 == 0 )
    {
         sum = (1 + multiple_count) * (multiple_count / 2) * divisor;
    }
    else
    {
         sum = (1 + multiple_count) * (multiple_count / 2) * divisor
             + (multiple_count/2 + 1) * divisor;
    }

    return sum;
}

long long get_sum2( long long num )
{
    long long sum = 0;

    for( int i=1; i<num; i++ )
    {
        if( i % 3 == 0 || i % 5 == 0 )
        {
            sum += i;
        }
    }

    return sum;
}

int main()
{
    long long x, y, z;
    long long result = 0;

    x = get_sum_of_multiples( 1000000000, 3 );
    y = get_sum_of_multiples( 1000000000, 5 );
    z = get_sum_of_multiples( 1000000000, 15 );

    result = x + y - z; 

    //result = get_sum2( 1000000000 );

    cout << "result : " << result << endl;
}
