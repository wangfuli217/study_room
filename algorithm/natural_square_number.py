'''
http://codingdojang.com/scode/542?answer_mode=hide

모든 자연수는 다수의 제곱수의 합으로 이루어져 있습니다.
예를 들면, 7 = 4 + 1 + 1 + 1과 같은 셈이죠.
12 = 9 + 1 + 1 + 1이면서, 12 = 4 + 4 + 4인 것이죠.
그렇다면 어떤 자연수를 입력으로 받았을 때, 그 자연수의 최소 갯수의
제곱수의 양의 제곱근의 리스트를 반환하는 프로그램을 작성해봅시다.

예시:

입력 : 5
출력 : 2, 1

입력 : 7
출력 : 2, 1, 1, 1

입력 : 12
출력 : 2, 2, 2

입력 : 1572
출력 : 38, 8, 8
'''

import sys, math

# 제곱한 값이 n 이하의 square numbr list [1,4,9,16,...]
def get_square_list( n ):
    l = []
    t = 1
    while (t ** 2) <= n:
        l.append(t**2)
        t += 1
        #print(" -> {}".format(l))
    return l

n = int(sys.argv[1])

def func(n):
    if n == 0: return []

    min_l = []
    min_len = n

    for x in list(reversed(get_square_list(n))):
        quo = int(n / x)
        remain = n % x

        l = [x] * quo + func(remain)
        if len(l) <= min_len:
            min_l = l
            min_len = len(l)

    return min_l

l = func(n)
l = list(map(lambda x: int(math.sqrt(x)), l))

print("{}".format(l))
