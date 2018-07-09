'''
문제 지민이는 수의 리스트가 있을 때, 이를 짝지어 각 쌍의 합이 소수가 되게 하려고 한다.
예를 들어, {1, 4, 7, 10, 11, 12}가 있다고 하자.
지민이는 다음과 같이 그룹지을 수 있다.

1 + 4 = 5, 7 + 10 = 17, 11 + 12 = 23

또는

1 + 10 = 11, 4 + 7 = 11, 11 + 12 = 23

수의 리스트가 주어졌을 때, 지민이가 모든 수를 다 짝지었을 때,
첫번째 수와 어떤 수를 짝지었는지 오름차순으로 출력하는 프로그램을 작성하시오.
즉, 첫번째 수와 나머지 수 중의 하나를 짝지었을 때 그 합은 소수여야 하며,
또한 나머지 수들로 2 개씩 짝을 지었을 때도 모두 소수여야 한다.
위의 예제에서 1 + 12 = 13으로 소수이다.
그러나, 남은 4개의 수를 합이 소수가 되게 짝지을 수 있는 방법이 없다.
따라서 예제의 답은 4, 10이다.

입력 첫째 줄에 리스트의 크기 N이 주어진다.
N은 50보다 작거나 같은 자연수이며, 짝수이다.
둘째 줄에 리스트에 들어있는 수가 주어진다.
리스트에 들어있는 수는 1,000보다 작거나 같은 자연수이며, 중복되지 않는다.

출력 첫째 줄에 정답을 출력한다. 없으면 -1을 출력한다.

예제 입력
6
1 4 7 10 11 12

예제 출력
4 10
'''

count = int(input())
number_list = list(map(int, input().split(' ')))

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

def is_prime_pair_list(l, s):
    if (len(s) - s) == 2:
        if is_prime_no(l[s] + l[s+1]) == 1:
            return 1

    ret = 0
    v1 = number_list[s]
    for i in range(s, len(l)):
        v2 = l[i]
        if is_prime_no(v1 + v2) == 1:
            if i > (s+1):
                swap_v(l, s+1, i)
            if is_prime_pair_list(l,s+2) == 1:
                ret = 1
    return ret

v1 = number_list[0]

for i in range(1, len(number_list)):
    v2 = number_list[i]
    if is_prime_no(v1 + v2) == 1:
        if i > 1:
            swap_v(number_list, 1, i)
        if is_prime_pair_list(number_list,2) == 1:
            l.append(number_list[1])

l = sorted(l)
print("{}".format(l))
