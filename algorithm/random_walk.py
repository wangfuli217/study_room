import random as rd
import numpy as np

h,v,x,y = map(int,raw_input().split())

m = np.zeros((h,v),dtype=int)

work_count = 0
done_count = 0

while 1:
    if x == 0: movex = rd.randint(0,1)
    elif x == (h-1): movex = rd.randint(-1,0)
    else: movex = rd.randint(-1,1)

    if y == 0: movey = rd.randint(0,1)
    elif y == (v-1): movey = rd.randint(-1,0)
    else: movey = rd.randint(-1,1)

    x = x + movex
    y = y + movey

    m[x,y] += 1
    work_count += 1

    if m[x,y] == 1:
        done_count += 1
    if done_count == (h*v):
        break

print(work_count)
print(m)
