'''
출처 : 프로젝트 오일러 2번문제, 한글 번역판

피보나치 수열의 각 항은 바로 앞의 항 두 개를 더한 것이 됩니다.
1과 2로 시작하는 경우 이 수열은 아래와 같습니다.

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

짝수이면서 4백만 이하인 모든 항을 더하면 얼마가 됩니까?
'''

def fibo( n ):
    if n in (1,2):
        return n
    return fibo(n-1) + fibo(n-2)

sumv = 0
n = 1

while 1:
    f = fibo(n)  # 매번 이렇게 구할 필요가 없지. (성능)
    if f > 4000000: break
    n += 1
    if f % 2 == 0:
        sumv += f

print(sumv)


'''
좀더 간단하고 성능도 월등히 좋은 코드

a, b = [0,1]
sum = 0
while b <= 4000000:
    a = a + b
    b, a = a, b
    if b % 2 == 0: sum += b
print(sum)
'''
