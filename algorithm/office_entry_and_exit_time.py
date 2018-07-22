'''
출처: http://www.careercup.com/question?id=13817668

아마존 면접문제

A사무실에는 특정일자의 출퇴근 시간이 기록된 거대한 로그파일이 있다고 한다.
파일의 형식은 다음과 같다.
(한 라인에서 앞부분은 출근시간(HH:MM:SS), 뒷부분은 퇴근시간이다)

09:12:23 11:14:35
10:34:01 13:23:40
10:34:31 11:20:10

특정시간을 입력(예:11:05:20)으로 주었을 때 그 시간에 총 몇 명이
사무실에 있었는지 알려주는 함수를 작성하시오.
'''

t = ''.join( input().split(':') )
count = 0

with open('test.txt', 'r') as f:
    while 1:
        line = f.readline()
        if not line: break
        l = [ ''.join( x.split(':') ) for x in line.split() ]
        if l[0] <= t <= l[1]: count += 1

print(count)

'''
위와 같이 094312 와 같이 : 를 제거하여 비교해도 되지만,
그냥 원래 string 그대로 비교해도 됨.
'''
