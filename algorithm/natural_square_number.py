'''
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

import sys

# n 이하의 max square numbr
def get_max_square_num( n ):
    t = 1
    val = 1

    while val <= n:
        t += 1
        val = t * t
    return (t-1)

# n 이하의 square numbr list [1,4,9,16,...]
def get_square_list( n ):
    l = []
    t = 1
    val = 1

    while val <= n:
        l.append(t)
        t += 1
        val = t * t
        #print(" -> {}".format(l))
    return l

n = int(sys.argv[1])
result = []

l = get_square_list(n)

if n == (l[-1] * l[-1]):
    minv = 1
    result.append(l[-1])
else:
    minv = n  # 1 로만 이루어지면 최대 갯수
    for x in reversed(l):
        #print("use square number ===> {}".format(x))
        tmp = []
        count = 0
        remain = n
        max_square = x

        while remain > 0:
            m = max_square * max_square
            quotient = int(remain / m)
            count += quotient
            tmp += [max_square] * quotient

            if remain % m == 0:
                remain = 0
            else:
                remain = remain % m
                max_square = get_max_square_num(remain)

        #if len(tmp) <= 10:
        #    print("  => {} : {}".format(count, tmp))

        if count <= minv:
            minv = count
            result = tmp

print("\nresult : count({}) : {}".format(minv,result))


'''
'''
