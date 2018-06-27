'''
문자열을 입력받아서, 같은 문자가 연속적으로 반복되는 경우에 그 반복 횟수를 표시하여 문자열을 압축하기.

입력 예시: aaabbcccccca
출력 예시: a3b2c6a1
'''

import re,sys

if __name__ == "__main__":
    print(''.join(x[0]+str(x[1].count(x[0])+1) for x in re.findall(r"(\w)(\1*)", sys.argv[1])))
