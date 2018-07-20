'''
두 날짜(YYYYMMDD)의 차이 일수를 구하는 프로그램을 작성하시오.
※ 단, 프로그래밍 언어에서 지원하는 날짜차이를 계산하는 라이브러리는 사용하지 말것

예)
20070515 sub 20070501 = 14
20070501 sub 20070515 = 14
20070301 sub 20070515 = 75
'''

start_date,end_date = raw_input().split()

d = [31,28,31,30,31,30,31,31,30,31,30,31]

def is_yun_year(y):
    if y %  400 == 0: return 1
    if y %  100 == 0: return 0
    if y %  4 == 0: return 1

def calc_date(y,s,e):
    if is_yun_year(y) == 1: d[1] = 29
    else: d[1] = 28
    smon = int(s[:2])
    emon = int(e[:2])
    sdat = int(s[-2:])
    edat = int(e[-2:])

    if smon == emon:
        return (edat - sdat)
    else:
        v = d[smon-1] - sdat
        for x in range(smon+1, emon ):
            v += d[x-1]
        v += edat
        return v

y_list = [ x for x in range(int(start_date[:4]), int(end_date[:4]) + 1) ]

if y_list[0] == y_list[-1]:
    ret = calc_date(y_list[0],start_date[4:],end_date[4:])
else:
    ret = calc_date(y_list[0],start_date[4:],'1231')
    for x in range(1,len(y_list)-1):
        if is_yun_year(y_list[x]) == 1:
            ret += 366
        else:
            ret += 365
    ret += calc_date(y_list[-1],'0100',end_date[4:])

print(ret)

'''
가독성이 훨씬 좋은 코드

def days_month(month):
    return  [0,31,28,31,30,31,30,31,31,30,31,30,31][month]
def days_year(year):
    if year%400==0:return 366
    if year%100==0:return 365
    if year%4==0:return 366
    return 365
def convert(yyyymmdd):
    res = 0
    ymd = str(yyyymmdd)
    y = int(ymd[:-4])
    m = int(ymd[-4:-2])
    d = int(ymd[-2:])
    for i in range(1900,y):res += days_year(i)
    for i in range(1,m):res += days_month(i)
    res += d
    return res
def subdate(a,b):
    return abs(convert(a)-convert(b))

print subdate(20070515,20070501)
print subdate(20070301,20070515)
'''
