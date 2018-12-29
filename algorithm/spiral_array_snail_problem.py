'''
문제는 다음과 같다:

6 6

  0   1   2   3   4   5
 19  20  21  22  23   6
 18  31  32  33  24   7
 17  30  35  34  25   8
 16  29  28  27  26   9
 15  14  13  12  11  10
위처럼 6 6이라는 입력을 주면 6 X 6 매트릭스에 나선형 회전을 한 값을 출력해야 한다.
'''

import numpy as np
import sys

r,c = map(int, input("input mxn : ").split(' '))

m = (-1) * np.ones((r,c), dtype=np.int64)

move = np.array([[0,1], [1,0], [0,-1], [-1,0]])
cur_pos = np.array([0,0])

# forward first (0:forward, 1:down, 2:backward, 3:up)
direction = 0
number = 0

while m[cur_pos[0],cur_pos[1]] == -1:
    m[cur_pos[0],cur_pos[1]] = number
    number += 1
    n = cur_pos + move[direction]
    if n[0] in [-1,r] or n[1] in [-1,c] or m[n[0],n[1]] != -1:
        direction = (direction+1) % len(move)
        cur_pos = cur_pos + move[direction]
        continue
    cur_pos = n

print("{}".format(m))

'''
아래가 가장 간단한 코드가 될 것 같다.

X,Y = map(int,raw_input().split(' '))
lis = [[-1 for i in xrange(Y)] for j in xrange(X)]
x,y = 0,0
dx,dy = 0,1
count = 0
while lis[x][y] == -1:
    lis[x][y] = count
    count+=1
    x,y = x+dx,y+dy
    if x in [-1,X] or y in [-1,Y] or lis[x][y] != -1:
        x,y = x-dx,y-dy
        dx,dy = dy,-dx
        x,y = x+dx,y+dy
for L in lis:
    for val in L:
        print '%3d'%val,
    print
'''
