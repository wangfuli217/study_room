

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
