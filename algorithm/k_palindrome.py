'''
출처: http://www.careercup.com/question?id=6287528252407808

페이스북 필기 문제 중 하나.

k-palindrome 은 문자열에서 최대 k개의 문자를 제거했을 때
palindrome이 되는 문자열을 말한다.

문자열 S와 정수값 K가 주어질 때 주어진 문자열이 k-palindrome일 경우 "YES",
아닐경우에는 "NO"를 출력하시오. (단, S의 최대길이는 20,000, K의 범위는 0<=K<=30)

※ 팔린드롬(palindrome) - 바로 읽든 거꾸로 읽든 결과가 같아지는
단어, 문구, 숫자를 말한다. (예: 'eye', 'Madam', '아들딸들아')

샘플 예:

Input - abxa 1 
Output - YES 

Input - abdxa 1 
Output - No
'''

import sys

s = sys.argv[1]
k = int(sys.argv[2])

S = []
for i in range(len(s)):
    S.append([s[i],i])

S = sorted(S)
split_S = []

ch = ''
idx = -1

for l in S:
    print("  {}".format(l))
    if l[0] != ch:
        idx += 1
        split_S.append([])
        split_S[idx].append(l)
        ch = l[0]
    else:
        split_S[idx].append(l)

print(split_S)

odd_item_count = 0

for l in split_S:
    if len(split_S) % 2 == 1:
        odd_item_count += 1

if odd_item_count > k:
    # 홀수인 문자가 k 보다 크면 안됨.
    print("No")
else:
    # 두개 이상이면 i 와 (len(s) - i)가 쌍이 되어야 함.
    print("Do something")
