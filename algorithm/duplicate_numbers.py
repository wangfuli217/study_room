'''
일전에 뭐 게임 회사에서 본 간단한 퀴즈 테스트 입니다.
0~9까지의 문자로 된 숫자를 입력 받았을 때, 이 입력 값이 0~9까지의 숫자가 각각 한 번 씩만 사용된 것인지 확인하는 함수를 구하시오.

sample inputs: 0123456789 01234 01234567890 6789012345 012322456789
sample outputs: true false false true false
'''

'''
sorting 없이 한번의 scan 비용만으로 판별가능할까?
(sorting 을 사용하면 코드가 가장 단순하긴 하다 = nlogn + n)

아래 방법은 2n 의 비용이 든다.

1. string length 가 10 이 아닌 것 false
2. 전체 수의 합산이 45 가 아닌 것 false
3. 0 을 제외한 전체 수의 곱이 9! 이 아닌 것 false
'''

from datetime import datetime
import sys
import random as rd

def get_val(l):
    f = 1
    s = 0
    for i in l:
        f *= i
        s += i
    return (f,s)

def get_v(l):
    s = 0
    for i in l:
        s += i
    return s

n = int(sys.argv[1])

start = datetime.now()
l = [ x for x in range(1,n+1) ]
rd.shuffle(l)
end = datetime.now()
elapse = end - start
print("prepare time : {}".format(elapse))

start = datetime.now()
f,s = get_val(l)
end = datetime.now()
elapse = end - start
print("elapse time : {}".format(elapse))

start = datetime.now()
l = sorted(l)
s = get_v(l)
end = datetime.now()
elapse = end - start
print("sort time : {}".format(elapse))
