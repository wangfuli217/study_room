'''
1~1000000 까지 각 숫자 분해하여 곱하기의 전체 합 구하기
예로, 10~15까지의 각 숫자 분해하여 곱하기의 전체 합은 다음과 같다.

10 = 1 * 0 = 0
11 = 1 * 1 = 1
12 = 1 * 2 = 2
13 = 1 * 3 = 3
14 = 1 * 4 = 4
15 = 1 * 5 = 5

그러므로, 이 경우의 답은 0+1+2+3+4+5 = 15
'''

from functools import reduce

print( sum( reduce(lambda x,y: x*y, list(map(int, list(str(i))))) for i in range(1,1000000+1)) )

'''
아래 결과가 가장 단순한 코드이긴 하지만, eval 때문에 성능이 잘 안나옴.
위의 코드보다 4 배 정도 느림.
print( sum(eval('*'.join(str(x))) for x in range(1,1000000)) )
'''
