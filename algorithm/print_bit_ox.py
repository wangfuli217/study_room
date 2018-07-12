'''
이 문제의 핵심은 비트 연산을 얼마나 잘 이해하고 있냐이기 때문에 비트 연산으로 풀어주세요.
input은 int n을 입력 받아 첫번째 row는 (n-1)의 O와 X,
두번째 row는 (n-2)의 O와 XX,
세번째 row는 (n-3)의 0와 XXX...
n번째 row는 n의 X을 출력하시오.

입력 예시: 6

출력 예시:
OOOOOX
OOOOXX
OOOXXX
OOXXXX
OXXXXX
XXXXXX
'''

import sys

n = int(sys.argv[1])
num = 2**n - 1
for x in range(1,n+1):
    print( "{0:b}".format(num << x)[-n:].replace('1','O').replace('0','X') )
