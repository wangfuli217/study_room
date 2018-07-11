import random as rd

student_cnt,col_num = map(int,raw_input().split(' '))

l = [ i for i in range(1,student_cnt+1) ]
rd.shuffle(l)

s = ''

for i in range(len(l)):
    s += (str(l[i]) + ' ')
    if (i+1) % 2 == 0: s += ' '
    if (i+1) % col_num == 0:
        print(s)
        s = ''

if s != '': print(s)
