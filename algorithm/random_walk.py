'''
'술취한 바퀴벌레' 문제라고도 한다.
다음과 같은 격자에 술취한 바퀴벌레가 있다고 해 보자

.   .   .   .
.   .   .   .
.   .   .   .
.   .   .   .
.   .   .   .
.   .   .   .
.   .   .   .

바퀴벌레는 임의의 한 점에서 시작하여서 임의의 방향으로 움직이게 된다.
이미 지나갔던 자리에 다시 갈 수 있으며 프로그램은 바퀴벌레가
각 위치에 몇번 갔는지 기억하여야 한다.
프로그램은 바퀴벌레가 모든 지점에 적어도 한번 이상 도달하였을 경우 끝난다.
바퀴벌레는 가로, 세로, 대각선으로 한칸 씩만 움직일수 있으며,
바퀴벌레가 움직이는 방향을 랜덤하게 만드는 것은 각자가 생각해 보도록 한다.

입력
격자의 가로, 세로 크기, 바퀴벌레의 초기 위치

출력
각 칸에 바퀴벌레가 멈추었던 횟수, 바퀴벌레가 움직인 횟수.

심화문제
격자의 가로, 세로의 크기를 입력받을때. 엄청나게 큰 크기를 입력하면 어떻게 할 것인가?
'''

import random as rd
import numpy as np
import itertools

h,v = map(int,input().split())

m = np.zeros((h,v),dtype=int)

DIRECTION = list(itertools.product((-1, 0, 1), repeat=2))
DIRECTION.remove((0, 0))

x = rd.randint(1,h)
y = rd.randint(1,v)

print("start -> x:{} y:{}".format(x,y))

walk_count = 0
done_count = 0

while 1:
    while 1:
        movex,movey = rd.choice(DIRECTION)
        if (0 <= (x + movex) < h) and (0 <= (y + movey) < v):
            break

    if (movex,movey) == (0,0):
        continue

    x = x + movex
    y = y + movey

    #print("-> ({},{})".format(x,y))

    m[x,y] += 1
    walk_count += 1

    if m[x,y] == 1:
        done_count += 1
    if done_count == (h*v):
        break

print(walk_count)
#print(m)

'''
두번 randint 를 수행하지 않고, 아래와 같은 방식을 사용하면
좀더 속도가 나올 듯...
import random
import itertools
import time

DIRECTION = list(itertools.product((-1, 0, 1), repeat=2))
DIRECTION.remove((0, 0))


def roach(xsize, ysize, xpos, ypos):
    matrix = {}
    pos = (xpos, ypos)
    count = 0
    while len(matrix) < xsize * ysize:
        matrix[pos] = matrix.get(pos, 0) + 1
        count += 1
        while True:
            tempdir = random.choice(DIRECTION)
            temppos = (pos[0] + tempdir[0], pos[1] + tempdir[1])
            if -1 < temppos[0] < xsize and -1 < temppos[1] < ysize: break
        pos = temppos
    return count, matrix

if __name__ == '__main__':
    t=time.time()
    xsize, ysize, xpos, ypos = 100, 100, 0, 0
    r= roach(xsize,ysize,xpos,ypos)
    print(r[0])
    print(time.time()-t)
    for i in range(ysize):
        print(' '.join(['{0:3}'.format(str(r[1][(j,i)])) for j in range(xsize)]))
'''
