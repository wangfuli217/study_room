'''
출처 : www.programming-challenges.com

지뢰찾기 게임은 M x N 매트릭스에 위치해 있는 지뢰를 찾는 게임이다.
M x N 매트릭스 상의 격자(square)는 지뢰이거나 지뢰가 아니다.
지뢰 격자는 *로 표시한다. 지뢰가 아닌 격자(square)는 숫자로 표시하며 그 숫자는 인접해 있는 지뢰의 수를 의미한다. (격자(sqaure)는 최대 8개의 인접한 지뢰를 가질 수 있다.)

다음은 4x4 매트릭스에서 2개의 지뢰(*)를 표시하는 방법이다.

*...
....
.*..
....

이 게임의 목표는 지뢰의 위치(*)를 제외한 나머지 격자들의 숫자를 맞추는 것이다.
위 경우의 답은 아래와 같다.

*100
2210
1*10
1110

입력
첫번째 줄은 M x N 의 M(행)과 N(열)에 해당되는 숫자이다. N과 M은 0보다 크고 100 이하이다. (0< N, M <=100) 그 다음 M개의 줄이 차례로 입력되고 각 줄은 정확하게 N개의 문자가 입력된다. 지뢰 격자는 *로 표시하며 지뢰가 아닌 격자는 .(dot)로 표시한다.

출력
지뢰(*)를 제외한 나머지 격자의 숫자값을 찾아서 M x N 매트릭스를 출력한다.

예1)

입력
4 4
*...
....
.*..
....

출력
*100
2210
1*10
1110

예2)

입력
3 5
**...
.....
.*...

출력
**100
33200
1*100
'''

import sys
import numpy as np

def show_usage():
    print("m and n must be 0 < mn <= 100")
    sys.exit(0)

# 입력 받기
def get_input():
    mn_str = input("type m x n : ")
    mn = mn_str.split(' ')

    for i in range(len(mn)):
        if int(mn[i]) <= 0 and int(mn[i]) > 100:
            show_usage()

    input_row = int(mn[0])
    input_col = int(mn[1])

    row_list = []

    for i in range(input_row):
        row = input("{}th row : ".format(i+1))
        if len(row) != input_col:
            show_usage()
        row_list.append(row)
    print("{}".format(row_list))

    return ( (input_row,input_col), row_list )

def modify_number_around( array, r, c ):
    for row in range(-1,2):
        for col in range(-1,2):
            if row != col:
                rr = r + row
                cc = c + col
                if rr >= 0 or rr <= array.shape[0]:
                    if cc >= 0 or cc <= array.shape[1]:
                        array[row,col] += 1

((input_row,input_col), row_l) = get_input()
array = np.zeros((input_row, input_col))

for i in range(len(row_l)):
    for j in range(len(row_l[i])):
        if row_l[i][j] == '*':
            array[i,j] = -9
            modify_number_around(array,i,j)

print("{}".format(array))
