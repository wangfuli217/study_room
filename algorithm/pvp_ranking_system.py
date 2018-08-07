'''
당신은 어느 한 게임회사에 입사했다.
당신의 프로그래밍 관련 수상 경력이 엄청났던지라 당신은 입사하자마자 바로 일을 맡게 되었다.
어느 한 RPG 게임의 PVP 컨텐츠의 랭킹을 구현하게되었다.

문제
사람의 수와 이름을 입력받고 SEASON ENDED 를 입력 받을 때 까지
승패 기록을 입력하시고 랭킹을 출력하시오.
처음은 모두 다 0점으로 시작하며 승리한 쪽은 +3 패배한 쪽은 -3 점수를 얻게 된다.
점수가 마이너스가 될 수 없으며 그 말은 맨 처음 승패 기록에서 아무도 점수를 잃지 않는다.
그러므로 만약 점수가 3점 미만이라면 점수를 잃지 않는다.
부등호가 가리키는 쪽이 승리다.
이름에 띄어쓰기는 들어가 있지 않다.
점수가 똑같은 플레이어가 있을 경우 앞에 있는 플레이어의 순위가 높게 된다.
(1 < n < 10000)

입력)
4
A
B
C
D
A < B
B < D
D < C
C < A
SEASON ENDED

출력)
A : 0
B : 3
C : 3
D : 3
'''

memb_cnt = int(input())
d = {}

for i in range(memb_cnt):
    t = input()
    d[t] = 0

while 1:
    s = input()
    if s == 'SEASON ENDED': break
    s = s.split()
    if s[1] == '>':
        (winner,loser) = (s[0], s[2])
    else:
        (winner,loser) = (s[2], s[0])

    d[winner] += 3
    d[loser] -= 3
    if d[loser] < 0: d[loser] = 0

d = sorted(d.items(), key = lambda x: str(-x[1]) + x[0])
print(d)
