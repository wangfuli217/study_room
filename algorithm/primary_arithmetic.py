'''
첫 번째 계산

아이들은 여러 자리 숫자들을 더하기 위해서 우에서 좌로 숫자를
하나씩 차례대로 더 하라고 배웠다.
1을 한 숫자 위치에서 다음 자리로 더하기위해 이동하는
"한자리올림" 연산을 많이 발견하는 것은 중요한 도전이 된다.
당신의 일은 교육자가 그들의 어려움을 평가하기 위하여,
덧셈 문제들의 각 집합에 대해서 한자리올림 연산들의 수를 계산하는 것이다.

입력
입력의 각 라인은 10개의 숫자들보다 미만인 양의 정수들 두 개를 포함한다.
입력의 마지막 라인은 0 0 을 포한한다.

출력
마지막을 제외한 입력의 각 라인에 대해서 당신은 두 숫자들을 더한 결과에서
한자리올림 연산들의 수를 아래 처럼 보여지는 형식으로 계산하여 출력해야 한다.

입력 샘플
123 456 
555 555 
123 594 
0 0

출력 샘플
No carry operation. 
3 carry operations. 
1 carry operation.
'''

l = []

while 1:
    a,b = input().split()
    if (a,b) == ('0','0'):
        break
    l.append( (a,b) )

carry_count = 0
for n in l:
    carry_count = 0
    (a,b) = (n[0], n[1])
    a = a[::-1]
    b = b[::-1]
    if len(a) > len(b):
        b = b + '0' * (len(a) - len(b))
    else:
        a = a + '0' * (len(b) - len(a))
    carry = 0
    for i in range(len(a)):
        #print("{} + {} + {}".format(int(a[i]), int(b[i]), carry))
        if (int(a[i]) + int(b[i]) + carry) >= 10:
            carry_count += 1
            carry = 1
    print("{} carry operation".format(carry_count))
