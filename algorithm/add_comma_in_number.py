'''
숫자 형태의 문자열을 콤마가 포함된 금액 표기식 문자열로
바꾸어주는 프로그램을 작성하시오.
※ 단, 프로그래밍 언어에서 지원하는 금액변환 라이브러리는 사용하지 말것

예)
  숫자        금액
    1000         1,000
20000000    20,000,000
-3245.24     -3,245.24
'''

n = input()
d = ''

if n.find('.') != -1:
    n,d = n.split('.')
    d = '.' + d

nn = ''
for idx,i in enumerate(n[::-1]):
    nn += i
    if (idx + 1) % 3 == 0:
        nn += ','

print(nn[::-1] + d)

'''
import re

def commaParse(num):
    return re.sub('(?<=\d)(?=(\d{3})+(?!\d))',',',str(num))

print (commaParse(-3245.24))
'''
