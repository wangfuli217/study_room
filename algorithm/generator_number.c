/*
어떤 자연수 n이 있을 때, d(n)을 n의 각 자릿수 숫자들과 n 자신을 더한 숫자라고 정의하자.
예를 들어

d(91) = 9 + 1 + 91 = 101

이 때, n을 d(n)의 제네레이터(generator)라고 한다. 위의 예에서 91은 101의 제네레이터이다.
어떤 숫자들은 하나 이상의 제네레이터를 가지고 있는데, 101의 제네레이터는 91 뿐 아니라 100도 있다. 그런데 반대로, 제네레이터가 없는 숫자들도 있으며, 이런 숫자를 인도의 수학자 Kaprekar가 셀프 넘버(self-number)라 이름 붙였다. 예를 들어 1,3,5,7,9,20,31 은 셀프 넘버 들이다.

1 이상이고 5000 보다 작은 모든 셀프 넘버들의 합을 구하라.
*/

#include <stdio.h>
#include <string.h>

int getDN( int num )
{
    int  d_n = num;

    while( num != 0 )
    {
        d_n += num % 10;
        num = num / 10;
    }

    return d_n;
}

int main()
{
    int  i;
    int  sum_of_self_number = 0;
    int  dn;
    int  hasGenerator[5000];

    memset( hasGenerator, 0x00, sizeof(hasGenerator) );

    for( i = 1; i < 5000; i++ )
    {
        dn = getDN(i);

        if( dn >= 5000 ) continue;

        if( i != dn )
        {
            hasGenerator[dn] = 1;
        }
    }

    for( i = 1; i < 5000; i++ )
    {
        if( hasGenerator[i] != 1 )
        {
            sum_of_self_number += i;
        }
    }

    printf("sum of self numbers : %d\n", sum_of_self_number );

    return 0;
}

