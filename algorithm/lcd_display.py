'''
LCD Display
한 친구가 방금 새 컴퓨터를 샀다.
그 친구가 지금까지 샀던 가장 강력한 컴퓨터는 공학용 전자 계산기였다. 
그런데 그 친구는 새 컴퓨터의 모니터보다 공학용 계산기에 있는
LCD 디스플레이가 더 좋다며 크게 실망하고 말았다. 
그 친구를 만족시킬 수 있도록 숫자를 LCD 디스플레이 방식으로 출력하는 프로그램을 만들어보자.

입력
입력 파일은 여러 줄로 구성되며 표시될 각각의 숫자마다 한 줄씩 입력된다.
각 줄에는 s와 n이라는 두개의 정수가 들어있으며 n은 출력될 숫자( 0<= n <= 99,999,999 ), s는 숫자를 표시하는 크기( 1<= s < 10 )를 의미한다.
0 이 두 개 입력된 줄이 있으면 입력이 종료되며 그 줄은 처리되지 않는다.

출력
입력 파일에서 지정한 숫자를 수평 방향은 '-' 기호를, 수직 방향은 '|'를 이용해서
LCD 디스플레이 형태로 출력한다. 각 숫자는 정확하게 s+2개의 열, 2s+3개의 행으로 구성된다.
마지막 숫자를 포함한 모든 숫자를 이루는 공백을 스페이스로 채워야 한다.
두 개의 숫자 사이에는 정확하게 한 열의 공백이 있어야 한다.

각 숫자 다음에는 빈 줄을 한 줄 출력한다.
밑에 있는 출력 예에 각 숫자를 출력하는 방식이 나와있다.

예
입력 예

2 12345
3 67890
0 0
출력 예

      --   --        --
   |    |    | |  | |
   |    |    | |  | |
      --   --   --   --
   | |       |    |    |
   | |       |    |    |
      --   --        --

 ---   ---   ---   ---   ---
|         | |   | |   | |   |
|         | |   | |   | |   |
|         | |   | |   | |   |
 ---         ---   ---
|   |     | |   |     | |   |
|   |     | |   |     | |   |
|   |     | |   |     | |   |
 ---         ---   ---   ---
'''

import sys
import numpy as np

display_table = [[1,1,1,0,1,1,1]   # 0
                ,[0,0,1,0,0,1,0]   # 1
                ,[1,0,1,1,1,0,1]   # 2
                ,[1,0,1,1,0,1,1]   # 3
                ,[0,1,1,1,0,1,0]   # 4
                ,[1,1,0,1,0,1,1]   # 5
                ,[1,1,0,1,1,1,1]   # 6
                ,[1,0,1,0,0,1,0]   # 7
                ,[1,1,1,1,1,1,1]   # 8
                ,[1,1,1,1,0,1,1]]  # 9

def printMatrix( m ):
    for i in range(m.shape[0]):
        for j in range(m.shape[1]):
            if m[i,j] == 1:
                print("|", end='')
            elif m[i,j] == 2:
                print("-", end='')
            else:
                print(" ", end='')
        print("\n", end='')

def numberToMatrix(number, row, col):
    m = np.zeros((row,col))
    l = display_table[number]
    if l[0] == 1:
        for i in range(s):
            m[0,i+1] = 2
    if l[1] == 1:
        for i in range(s):
            m[i+1,0] = 1
    if l[2] == 1:
        for i in range(s):
            m[i+1,s+1] = 1
    if l[3] == 1:
        for i in range(s):
            m[s+1,i+1] = 2
    if l[4] == 1:
        for i in range(s):
            m[s+2+i,0] = 1
    if l[5] == 1:
        for i in range(s):
            m[s+2+i,s+1] = 1
    if l[6] == 1:
        for i in range(s):
            m[2*s+2,i+1] = 2
    return m

if __name__ == "__main__":
    s = int(sys.argv[1])

    row = 2 * s + 3
    col = s + 2

    sum_m = np.zeros((row,0))
    zero_m = np.zeros((row,1))

    for i in range(len(sys.argv[2])):
        cur_m = numberToMatrix(int(sys.argv[2][i]), row, col)
        m = np.concatenate((zero_m,cur_m),axis=1)
        sum_m = np.concatenate((sum_m,m),axis=1)

    printMatrix(sum_m)

'''
더 나은 코드
def lcd_disp(size, num_str):
    #  -   0
    # | | 1 2
    #  _   3
    # | | 4 5
    #  _   6
    _map = [
        '1011010111',
        '1000111111',
        '1111100111',
        '0011111011',
        '1010001010',
        '1101111111',
        '1011011010'
    ]
    def _horizon(key):
        prt = [' ', '-']
        for x in num_str:
            print (' {} '.format(prt[int(_map[key][int(x)])] * size), end=' ')
        print('')
    def _vertical(key1, key2):
        prt = [' ', '|']        
        for i in range(size):
            for x in num_str: 
                print ('{}{}{}'.format(prt[int(_map[key1][int(x)])]
                                       ,' ' * size
                                       ,prt[int(_map[key2][int(x)])]),
                       end=' ')
            print('')

    _horizon(0)
    _vertical(1, 2)
    _horizon(3)
    _vertical(4, 5)
    _horizon(6)

lcd_disp(2, '12345')
lcd_disp(3, '67890')
'''
