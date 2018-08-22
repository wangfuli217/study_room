'''
사다리 게임

input:
a b c d e f
| | | | | |
|-| | |-| |
| | |-| | |
| |-| | |-|
| | |-| | |
|-| | |-| |
| | | | | |
1 2 3 4 5 6

output:
a - 5
b - 2
c - 3
d - 6
e - 1
f - 4
'''

import numpy as np

l = []
while 1:
    s = input()
    if s == '': break
    l.append(s)

up = l[0].replace(' ', '')
down = l[-1].replace(' ', '')

l = l[1:-1]

m = np.zeros( (len(l), len(up)), dtype=int )
for i in range(len(l)):
    for j in range(len(up)):
        m[i,j] = -1

row = 0
for s in l:
    for i in range(len(s)):
        if s[i] == '-':
            m[row,int(i/2)] = int(i/2) + 1
            m[row,int((i+1)/2)] = int(i/2)
    row += 1

for c in range(len(up)):
    col = c
    row = 0
    while row < len(l):
        if m[row,col] != -1:
            col = m[row,col]
        row += 1
    print("input ({}) -> output ({})".format(up[c], down[col]))

'''
inp = '''a b c d e f
| | | | | |
|-| | |-| |
| | |-| | |
| |-| | |-|
| | |-| | |
|-| | |-| |
| | | | | |
1 2 3 4 5 6
'''

a, *b, c = inp.splitlines()
c = list(c)
for line in b:
  for i, x in enumerate(line):
    if i % 2 == 1 and x == '-':
      c[i-1], c[i+1] = c[i+1], c[i-1]

result = list(zip(a, c))[::2]
for x, y in result:
  print('{} - {}'.format(x,y))
'''
