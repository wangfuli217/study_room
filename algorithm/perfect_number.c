/*
수의 특별한 의미를 부여하는 것을 수비주의라고 한다.
당신은 어떤 사건을 수사하기 위해 수비주의 클럽에 들어가야한다.
다만 이 클럽에 들어가기 위해서는 어떤 수를 입력받고 그 수가 어떤 수인지
알려주는 프로그램을 작성해야 한다.
문제) 양의 정수 n을 입력받고 그 수가 과잉수인지 완전수인지 부족수인지 출력하는 프로그램을 작성하십시오.

예)
   6
  20
  15

답)
  완전수(perfect number)입니다
  과잉수(abundant number)입니다
  부족수(defective number)입니다
*/

#include <stdio.h>
#include <stdlib.h>

int main(int argc, char * argv[])
{
    int  i;
    int  n = atoi(argv[1]);
    int  sum = 0;

    sum += 1;
    for( i = 2; i<=n/2; i++ )
    {
        if( n % i == 0 )
        {
            sum += i;
        }
    }

    if( sum == n )
    {
        printf("perfect number\n");
    }
    else if( sum > n )
    {
        printf("abundant number\n");
    }
    else
    {
        printf("defective number\n");
    }
}
