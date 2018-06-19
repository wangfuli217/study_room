/*
두 수의 최대공약수를 구하는 문제.
밥 아저씨는 돈을 힘들게 모은 끝에 한 토지를 구입했다.
밥 아저씨는 그 토지에 유명한 식물을 심을려고 하는데,
그 식물은 주변 n*n 미터 안에 다른 식물이 있으면 자라지 못한다고 한다.
그러므로 토지의 넓이를 n*n으로 나누어야 한다.
토지의 가로와 세로의 길이를 입력받을때, 최대 심을 수 있는 식물의 개수는?
(단, n의 값은 식이 성립하는 n의 범위 중에서 최대여야 한다.)

예)
  640  400
  1980 640

답)
  40
  3168
*/

#include <stdlib.h>
#include <stdio.h>

int min( int x, int y )
{
    if( x < y ) return x;
    else return y;
}

/* 주어진 수의 최대약수 구하기 */
int get_max_divisor( int arg )
{
    int i;
    int max_divisor = 1;

    for( i = 2; i<arg/2; i++ )
    {
        if( arg % i == 0 )
        {
            max_divisor = i;
        }
    }

    return max_divisor;
}

int main(int argc, char * argv[])
{
    int i;
    int x = atoi(argv[1]);
    int y = atoi(argv[2]);
    int max_common_divisor = 1;
    int min_num = min(x,y);

    if( x == y )
    {
        printf("max common divisor : %d\n", get_max_divisor(x));
    }
    else
    {
        if( x == min_num )
        {
            if( y % x == 0 )
            {
                max_common_divisor = x;
                goto end;
            }
        }
        else
        {
            /* y == min_num */
            if( x % y == 0 )
            {
                max_common_divisor = y;
                goto end;
            }
        }

        for( i=2; i<=min_num/2 ; i++ )
        {
            if( (x % i == 0) && (y % i == 0) )
            {
                max_common_divisor = i;
            }
        }
    }

end:
    printf("max common divisor : %d\n", max_common_divisor);
    return 0;
}
