'''
출처 : http://www.careercup.com/question?id=7528760
아마존 면접문제

다음과 같은 형태의 배열을
[a1,a2,a3...,an,b1,b2...bn]

다음과 같은 형태로 바꾸시오
[a1,b1,a2,b2.....an,bn]
'''

n = int(input())
l = [ 'a'+str(x) for x in range(1,n+1) ] + [ 'b'+str(x) for x in range(1,n+1) ]

for i in range(len(l)):
    l[i] = int(l[i][1:])

l = sorted(l)

for i in range(len(l)):
    if i % 2 == 0:
        l[i] = 'a' + str(l[i])
    else:
        l[i] = 'b' + str(l[i])

print(l)

'''

아래 방법이 가장 간단하고 성능도 nlogn 정도인데...
이미 숫자의 경우는 정렬된 두 집합을 섞는 것이라서 더 빠를 수 있을 것 같은데...

n = int(input())
l = [ 'a'+str(x) for x in range(1,n+1) ] + [ 'b'+str(x) for x in range(1,n+1) ]
print(sorted(l, key=lambda k: int(k[1:])))
'''
