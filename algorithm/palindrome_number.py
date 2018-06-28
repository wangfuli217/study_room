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

def findPalin( n ):
    number = 0
    nth = 0

    while 1:
        numstr = str(number)
        numlen = len(numstr)

        for i in range(numlen):
            if i >= ((numlen-1)-i):
                #print("palin {}".format(number))
                nth += 1
                break
            if numstr[i] != numstr[(numlen-1)-i]:
                break

        if nth == n:
            return number

        number += 1

if __name__ == "__main__":
    n = int(sys.argv[1])

    ret = findPalin(n)
    print(ret)

'''
 위의 로직은 성능이 너무 안나온다.
 아래의 규칙을 이용하면 되지 않을까?

 한 자리   -> 10
 두 자리   -> 9
 세 자리   -> 9 x 10
 4 자리    -> 9 x 10
 5 자리    -> 9 x 10 x 10
 6 자리    -> 9 x 10 x 10
 7 자리    -> 9 x 10 x 10 x 10
 8 자리    -> 9 x 10 x 10 x 10
 ...
'''
