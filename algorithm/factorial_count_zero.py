'''
N!의 정의는 다음과 같습니다.

N! = 1 * 2 * 3 * 4 ... N
이때 N!를 정수로 변환 해 뒤에서 부터 연속되는 0의 갯수를 구하세요.

예) f(12) -> 2 # 12!은 479001600 f(25) -> 6 # 25!은 15511210043330985984000000
'''

import sys
from functools import reduce
import re

m = reduce(lambda x, y: x*y, [x for x in range(1,int(sys.argv[1])+1)])
r = len(re.split(r"[1-9]", str(reduce(lambda x, y: x*y, [x for x in range(1,int(sys.argv[1])+1)]))[::-1])[0])

print("{} {}".format(m,r))
