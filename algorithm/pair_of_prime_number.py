'''
test
'''

import sys

def is_prime_no( n ):
    if n % 2 == 0:
        return 0
    else:
        for i in range(2,(n>>1)+1):
            if n % i == 0:
                return 0
        return 1

def swap_v(l, i1, i2):
    tmp = l[i1]
    l[i1] = l[i2]
    l[i2] = tmp

def is_prime_pair_list(l, s, depth):
    #print("{}{}".format(' '*depth*2, l[s:]))
    if (len(l) - s) == 2:
        if is_prime_no(l[s] + l[s+1]) == 1:
            return 1
        else:
            return 0

    ret = 0
    v1 = l[s]
    for i in range(s+1, len(l)):
        v2 = l[i]
        if is_prime_no(v1 + v2) == 1:
            if i > (s+1):
                swap_v(l, s+1, i)
            if is_prime_pair_list(l,s+2, depth+1) == 1:
                ret = 1
                break
    return ret

number_list = list(map(int, raw_input().split(' ')))
if len(number_list) % 2 != 0:
    print("you need to type event count of numbers")
    sys.exit(0)

v1 = number_list[0]
l = []

for i in range(1, len(number_list)):
    number_list = sorted(number_list)
    v2 = number_list[i]
    #print("[{}:{}]".format(v1,v2))
    if is_prime_no(v1 + v2) == 1:
        if i > 1:
            swap_v(number_list, 1, i)
        if is_prime_pair_list(number_list,2, 1) == 1:
            l.append(number_list[1])

print("{}".format(l))
