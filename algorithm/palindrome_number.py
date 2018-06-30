'''
앞뒤가 같은 수는 바로 쓴 값과 거꾸로 쓴 값이 같은 수이다. 다음과 같은 예를 들 수 있다.

1
44
101
2002
8972798
1111111111111

0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22, 33, 44, 55, 66, 77, 88, 99, 101, 111, ... 과 같이,
0 이상의 앞뒤가 같은 수를 크기 순으로 나열할 때, n 번째 수를 계산하는 프로그램을 작성하라.

n은 1부터 시작하며 크기에는 제한이 없다.

입출력예
예 1) 1 => 0
예 2) 4 => 3
예 3) 30 => 202
예 4) 100 => 909
예 5) 30000 => 200000002
예 6) 1000000 => 90000000009
'''

import sys
from functools import reduce

'''
# too slow
def isPalin( number ):
    numstr = str(number)
    numlen = len(numstr)

    for i in range(numlen):
        if i >= ((numlen-1)-i):
            return 1
        if numstr[i] != numstr[(numlen-1)-i]:
            return 0

def findPalin( n ):
    number = 0
    nth = 0

    while 1:
        if isPalin(number) == 1:
            #print("palin {}".format(number))
            nth += 1
        if nth == n:
            return number
        number += 1
'''

# input  : 숫자의 자릿수 k
# output : k 자릿수의 수 중에서 palindrome 수의 갯수
def getPalinCount( k ):
    if k < 1:
        return 0
    else:
        return ( 9 * 10 ** int((k - 1)/2) )

# 1 ~ k 자릿수까지의 palindrome 수의 총 갯수 합
def getPalinSum( k ):
    return ( sum( [ getPalinCount(i+1) for i in range(k) ] ) + 1 )  # plus 1 for 0

if __name__ == "__main__":
    n = int(sys.argv[1]) # n > 0

    if n <= 10:
        print("result : {}".format(n-1))
        sys.exit(0)

    k = 0
    sum_palin = 0

    # n 번째 palindrome 수가 몇자리 수인지 찾는다.
    while sum_palin < n:
        k += 1
        sum_palin = getPalinSum(k)

    print("==> {} 번째 palin 자릿수: {}".format(n,k), end='')

    # k 자릿수의 수 중에서 n 번째 palindrome 수를 찾기 위해
    # 앞쪽의 수부터 결정하면서 범위를 좁혀나간다.
    base_sum = getPalinSum(k-1)
    remain_n = n - base_sum

    val_str = ""
    val_str_r = ""
    s = 1  # 맨 앞자리는 0 이 올수 없다.
    sump = 0

    while k > 0:
        interval = int(getPalinCount(k) / 9)
        for i in range(s, 10):
            sump += interval

            if sump >= remain_n:
                val_str += str(i)
                if k != 1:
                    val_str_r += str(i)
                remain_n = remain_n - (sump - interval)
                k = k - 2
                s = 0
                sump = 0
                break

    print(", result : {}".format(val_str + val_str_r[::-1]))

'''
 위의 too slow 로직은 성능이 너무 안나온다.
 아래의 규칙을 이용하면 되지 않을까?

 0        -> 1 개
 1 자리수 -> ( 9 x 10 ** 0 ) 개 (palindrome 수 갯수) (1~9)
 2 자리수 -> ( 9 x 10 ** 0 ) 개
 3 자리수 -> ( 9 x 10 ** 1 ) 개
 4 자리수 -> ( 9 x 10 ** 1 ) 개
 5 자리수 -> ( 9 x 10 ** 2 ) 개
 6 자리수 -> ( 9 x 10 ** 2 ) 개
 7 자리수 -> ( 9 x 10 ** 3 ) 개
 8 자리수 -> ( 9 x 10 ** 3 ) 개
 ...

 10 의 승수를 곱하는 함수
 f(1) = 0
 f(2) = 0
 f(3) = 1
 f(4) = 1
 f(5) = 2
 f(6) = 2
 ...
 f(x) = int( (x-1) / 2 )
'''
