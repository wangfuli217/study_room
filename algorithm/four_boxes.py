'''
4개의 직사각형이 평면에 있는데 밑변이 모두 가로축에 평행하다.
이 직사각형들이 차지하는 면적을 구하는 프로그램을 작성하시오.
이 네 개의 직사각형들은 서로 떨어져 있을 수도 있고 겹쳐 있을 수도 있다.
또한 하나가 다른 하나를 포함할 수도 있으며, 변이나 꼭지점이 겹쳐질 수도 있다.

입력형식

하나의 직사각형은 왼쪽 아래의 꼭지점과 오른쪽 위의 꼭지점의 좌표로 주어진다.
입력은 네 줄이며, 각 줄은 네 개의 정수로 하나의 직사각형을 나타낸다.
첫 번째와 두 번째의 정수는 사각형의 왼쪽 아래 꼭지점의 x좌표, y좌표이고,
세 번째와 네 번째의 정수는 사각형의 오른쪽 위 꼭지점의 x좌표, y좌표이다.
단, x좌표와 y좌표는 1 이상이고 1000 이하인 정수이다.

출력형식
화면에 4개의 직사각형이 차지하는 면적을 출력한다.

입력예제
1 2 4 4 
2 3 5 7 
3 1 6 5 
7 3 8 6

출력예제
26
'''

def is_splited( r1, r2 ):
    ( (r1x1,r1y1), (r1x2,r1y2) ) = r1
    ( (r2x1,r2y1), (r2x2,r2y2) ) = r2

    if ((r1x1 >= r2x1) and (r1x1 >= r2x2)) or ((r1x2 <= r2x1) and (r1x2 <= r2x2)):
        return 1
    else:
        return 0

def get_intersect( r1, r2 ):
    ( (r1x1,r1y1), (r1x2,r1y2) ) = r1
    ( (r2x1,r2y1), (r2x2,r2y2) ) = r2

    if r1x1 < r2x1:  lx = r2x1
    else:            lx = r1x1
    if r1x2 < r2x2:  rx = r1x2
    else:            rx = r2x2

    if r1y1 < r2y1:  ly = r2y1
    else:            ly = r1y1
    if r1y2 < r2y2:  ry = r1y2
    else:            ry = r2y2

    return abs(rx-lx) * abs(ry-ly)

def get_area( r ):
    ( (x1,y1), (x2,y2) ) = r
    return (abs(x2 - x1) * abs(y2 - y1))

r = []
while 1:
    l = input().split()
    if l == []: break
    x1,y1,x2,y2 = l
    r.append( ((int(x1),int(y1)), (int(x2),int(y2))) )

# 일단 전체 면적 더한다.
area = 0
for x in r:
    area += get_area(x)

print(area)

# 둘씩 조합하여 겹치는 면적 뺀다.
for i in range(len(r)):
    for j in range(i+1,len(r)):
        if is_splited( r[i], r[j] ) != 1:
            print("{} : {} : {}".format(r[i], r[j], get_intersect( r[i], r[j] )))
            area -= get_intersect( r[i], r[j] )
            
print(area)

'''
좀더 나은 해법.
4개의 사각형을 모두 둘러싸는 최소의 사각형을 구해 그 넓이를 구하고,
사각형의 모든 좌표는 정수값이라는 점에 착안,
둘러싼 영역의 각 좌표 x, y에 대해 x + 0.5, y + 0.5 가
A, B, C, D 사각형의 어느 것에도 속해있지 않다면,
전체 넓이에서 1씩 빼서 답을 구합니다.

inputs = []
for _ in range(4):
    ax, ay, bx, by = [int(x) for x in input().split()[:4]]
    inputs.append(((ax, ay), (bx, by)))

# get sx, sy ~ ex, ey
sx = min([x[0] for (x, _) in inputs])
sy = min([x[1] for (x, _) in inputs])
ex = max([x[0] for (_, x) in inputs])
ey = max([x[1] for (_, x) in inputs])

s = (ex - sx) * (ey - sy)

def hasPoint(a, b, px, py):
    ax, ay = a
    bx, by = b
    return ax < px + 0.5 < bx and ay < py + 0.5 < by

for x in range(sx, ex):
    for y in range(sy, ey):
        for a, b in inputs:
            if hasPoint(a, b, x, y):
                break
        else:
            s -= 1
print(s)


가장 간단한 해법1
class RectBox: 
    def __init__(self): 
        self.box = {} 
    def add(self, x1, y1, x2, y2): 
        for x in range(x1, x2): 
            for y in range(y1, y2): 
                self.box[(x,y)] = 1 
    def area(self): 
        return len(self.box) 

가장 간단한 해법2
matr = set()
lis = []
for i in range(4):
    lis.append(tuple(map(int,input().split())))
for p in lis:
    x1 = p[0]
    y1 = p[1]
    x2 = p[2]
    y2 = p[3]
    for x in range(x1,x2):
        for y in range(y1,y2):
            matr.add((x,y))  # (x,y)는 (x,y)부터 (x+1,y+1)까지의 정사각형
                             # 똑같은 것이 집합에서는 하나로 취급되어 중복없음
print(len(matr))
'''
