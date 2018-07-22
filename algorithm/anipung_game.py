'''
출처 : http://www.synapsoft.co.kr/jsp/recruit/17.html

우리의 주인공은 올해에는 애니펑!이라는 게임을 만들어보기로 마음먹었어요!!
하지만 함께 할 파티원을 아직 구하지 못해서, 일단은 핵심 로직이라도 구현해보려 합니다.

누구나 알 것 같은 애니펑! 게임의 규칙을 굳이 써 보자면 아래와 같습니다.

타일판은 5 × 5
타일 종류는 1 ~ 4의 네 가지
가로나 세로로 3개 이상 같은 타일이 연속될 경우 펑! 사라지고,
그 자리에는 위쪽의 타일들이 내려와서 메꿉니다.
내려오면서 비게 된 자리는 0으로 채워집니다.

위의 규칙대로 동작하는 프로그램을 작성해주세요.
프로그래밍 언어에 제약은 없지만, 외부 라이브러리는 사용하지 마세요.

입력 형식
아래 예와 같은 5 × 5 숫자 배열을 표준입력으로 읽어들임

2 4 1 2 1
3 4 2 3 3
2 4 1 2 2
4 4 4 1 2
4 2 3 3 2

출력형식
같은 타일들을 모두 처리한 후의 최종 5 × 5 숫자 배열

0 0 0 0 0
2 0 0 0 0
3 0 0 0 0
2 0 0 2 0
4 0 1 3 0
'''

import numpy as np
from itertools import groupby

m = np.zeros((5,5),dtype=int)

for i in range(5):
    m[4-i] = list(map(int,input().split()))

def to_zero( l ):
    for i in range(len(l)):
        if len(l[i]) >= 3 and l[i][0] != '0':
            l[i] = '0' * len(l[i])
    return [int(x) for x in ''.join(l)]

def get_hstr_grouping( m, row_no ):
    hs = ''.join(map(str,m[row_no]))
    hl = [ ''.join(i) for _, i in groupby(hs) ]
    return hl

def get_vstr_grouping( m, col_no ):
    l = [ x[col_no] for x in m ]
    vs = ''.join(map(str,l))
    vl = [ ''.join(t) for _, t in groupby(vs) ]
    return vl

def pung_horizontal( m ):
    for rowid in range(5):
        hl = get_hstr_grouping( m, rowid )
        hl = to_zero(hl)
        m[rowid] = hl

def pung_vertical( m ):
    for col in range(5):
        vl = get_vstr_grouping( m, col )
        vl = to_zero(vl)
        for i in range(len(vl)):
            m[i,col] = vl[i]

def moveb( m, row, col ):
    if row < m.shape[0]:
        for i in range(row, m.shape[0]):
            m[i-1,col] = m[i,col]
        m[m.shape[0]-1,col] = 0

def shift_block( m ):
    need_move = 0
    moved = 0
    for col in range(m.shape[1]):
        for row in range(m.shape[0]):
            while m[row,col] == 0:
                for i in range(row+1,m.shape[0]):
                    if m[i,col] != 0:
                        need_move = 1
                if need_move == 1:
                    moveb(m,row+1,col)
                    moved = 1
                    need_move = 0
                else: break
    return moved;

moved = 1
while moved != 0:
    pung_horizontal(m)
    pung_vertical(m)
    moved = shift_block(m)

for i in range(5):
    print( ' '.join( list(map(str,m[4-i])) ))
