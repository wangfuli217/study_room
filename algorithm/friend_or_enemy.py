'''
여러분은 이웃한 나라인 A국으로 스파이를 파견했다.
A국의 국회는 야당과 여당의 2당 체제인데, A국의 정치인들은 직선적이고
한번 뜻을 세우면 굽히지 않는 강직한 성격을 가지고 있다.
따라서 A국의 정치인들은 다음과 같은 원칙에 따라 편을 가른다.

나의 친구의 친구는 나의 친구이다.
나의 친구의 적은 나의 적이다.
나의 적의 친구는 나의 적이다.
나의 적의 적은 나의 친구이다.

A국에 파견된 첩보원은 자신이 알아낸 A국 정치인들 사이의 인간관계를 지속적으로 보고하고 있다.
그런데 당신은 요즘 이 첩보원이 적에게 포섭되어 배신한 것이 아닌지 의심하고 있다.
만일 그가 배신하여 잘못된 정보를 알려준다면 대 A국 전략을 수립하는 데에 어려움이 생길 것이다.

정치인인 동시에 유능한 프로그래머이자 장래가 촉망받는 치킨업 후계자인 여러분은
스파이가 거짓말을 하고 있는지를 검사해 보려고 한다.

입력 형식 첫 줄에 A국 정치인의 수 N(<=100000), 처리할 명령의 수 M(<=1000000)이 주어진다.
이후 M개의 줄에 대해서 다음 형식의 입력이 들어온다.

a b x : 첩보원이 a와 b가 친구 또는 적이라는 보고를 했음을 말한다.
        x가 'e'이면 두 정치인은 적이고, 'f'이면 두 정치인은 친구이다.
출력 형식 스파이의 보고 중에서 모순이 발생하는 첫 번째 보고의 번호를 출력한다.
입력의 마지막까지 모순이 발생하지 않았다면 "THE SPY DID NOT BETRAY"를 출력한다.

입력 예제
3 3
1 2 f
2 3 e
1 3 f

출력 예제
3
해설) 1과 2는 친구이고 2와 3이 적이므로 1과 3은 서로 적이어야 한다.

입력 예제
5 7
1 2 f
3 4 e
4 5 f
2 4 e
1 3 e
1 4 e
5 3 e
출력 예제
5
'''

import numpy as np

succ = 1
fail = 0

def setGivenReport( m, h, idx ):
    # print("{} : {} {} {}".format(i, h[idx][0], h[idx][1], h[i][2]))
    if h[idx][2] == 'f':
        val = 1
    else:
        val = 0

    row = h[idx][0]-1
    col = h[idx][1]-1

    # 주어진 보고 값과 이미 셋팅된 값이 다를 경우 모순 보고
    if np.isnan(m[row,col]) != 1:
        if m[row,col] != val:
            return fail

    m[ row, col ] = val
    m[ col, row ] = val

    return succ


# 기존 보고를 통해 다른 관계들을 채워넣음
def updateRelation( m ):
    for row in range(len(m)):
        for col in range(len(m)):
            if row != col:
                if np.isnan(m[row,col]) != 1:
                    x = int(m[row,col])
                    #print("-> [{},{}] = {}".format(row,col,x))
                    for row2 in range(len(m)):
                        #print("  -> [{},{}] = {}".format(row2,col,m[row2,col]))
                        if row2 != col:
                            if row2 != row:
                                if np.isnan(m[row2,col]) != 1:
                                    y = int(m[row2,col])
                                    val = 1 - (x ^ y)
                                    m[row,row2] = val


def doit( sz, h ):
    print("\n==========\n");
    m = np.empty((sz,sz))
    m.fill(np.nan)

    # 자신은 항상 친구
    for i in range(len(m)):
        m[i][i] = 1

    for i in range(len(h)):
        ret = setGivenReport( m, h, i )
        if ret == fail:
            print("*** {} th Report is not valid".format(i+1));
            break 

        updateRelation( m )
        print("{}\n".format(m))


p1 = 3  # number of people
r1 = [ [1,2,'f'],  # Report
       [2,3,'e'],
       [1,3,'f'] ]

p2 = 5
r2 = [ [1,2,'f'],
       [3,4,'e'],
       [4,5,'f'],
       [2,4,'e'],
       [1,3,'e'],
       [1,4,'e'],
       [5,3,'e'] ]

p3 = 10
r3 = [ [1,2,'f'],
       [3,4,'e'],
       [4,5,'f'],
       [2,4,'e'],
       [4,1,'e'],
       [1,4,'e'],
       [5,3,'e'],
       [7,3,'e'],
       [7,5,'f'],
       [4,5,'f'],
       [7,2,'f'] ]

doit(p1,r1)
doit(p2,r2)
doit(p3,r3)

'''
친구사이가 1 이고 적인 사이가 0 일 때, 0과 1 또는 1과 0이 만나면 1이 되고,
1과 1 또는 0과 0이 만나면 1이 되는 연산은 Exlusive OR 의 부정(XNOR)이다.

나의 친구의 친구는 나의 친구이다. (1 XNOR 1) -> 1
나의 친구의 적은 나의 적이다.     (1 XNOR 0) -> 0
나의 적의 친구는 나의 적이다.     (0 XNOR 1) -> 0
나의 적의 적은 나의 친구이다.     (0 XNOR 0) -> 1

1 - (1 ^ 1) -> 1
1 - (1 ^ 0) -> 0
1 - (0 ^ 1) -> 0
1 - (0 ^ 0) -> 1

     1    2    3    4    5 (people)
---------------------------
1 |  1    1    1    0    0  (1: 친구사이, 0:적)
2 |  1    1    1    0    0
3 |  1    1    1    0    0
4 |  0    0    0    1    1
5 |  0    0    0    1    1
'''
