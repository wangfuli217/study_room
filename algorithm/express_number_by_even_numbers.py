'''
현우는 동생한테 곱하기를 가르쳐 주던중 곱하기를 외우기 귀찮아하던
자신의 어릴적 모습이 생각이나 어떻게하면 극복을 할 수 있을까
고민을 하던중 한가지 꼼수를 생각했다!

그것은 n을 입력받고 두개의 양수의 곱이 n이 되는 모든 양수를
출력하는 프로그램을 만드는 것이다!

ex : 18 > (18,1)(9,2)(6,3)(3,6)(2,9)(1,18) #9,2와 2,9는다른것으로본다.

오늘도 귀찮은 현우를 위해 오늘도 힘써주자!

(난이도 up.ver: n과m을 입력받고 m개의 양수의 곱이 n이 되는 모든 양수출력!)
'''

n = int(input())

cd = [ x for x in range(1, n//2+1) if n % x == 0 ] + [n]

'''
for i in cd:
    print("({},{})".format( i, n//i ), end='' )
'''

# upgrade
for i in range(len(cd)):
    for j in range(i+1,len(cd)):
        for k in range(j+1,len(cd)):
            if cd[i] * cd[j] * cd[k] == n:
                print("({},{},{})".format(cd[i],cd[j],cd[k]), end='')

print('')
