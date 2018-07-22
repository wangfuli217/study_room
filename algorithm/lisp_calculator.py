'''
LISP은 괄호로 유명한 언어다.
이 문제는 LISP 형태로 표현된 4칙연산 산술식을 계산하는
계산기 프로그램을 작성하는 것이다.

LISP 표현식은 여는 괄호와 공백으로 구분된 항(term)의 목록 그리고 닫는 괄호로 만들어진다.
첫 번째 항은 +, -, *, /와 같은 심볼이며 나머지 항은 1, 2, 10, -10 등의 정수
혹은 또다른 LISP 표현식이 될 수 있다. 말하자면 연산자들이 가변 길이 인자를 받는 셈이다.

더하기의 경우 (+ 1 2 3)은 6이다. (+)만 단독으로 사용된 경우는 0이다.
곱하기의 경우는 기본 값이 1이고, 빼기와 나누기는 인자가 최소 하나 이상 있어야 한다.
아래는 빼기와 곱하기의 예를 보여준다. (화살표는 결과값을 나타낸다)

(- 10 3) → 7
(- 10 3 5)  → 2
(* 2 3) → 6
(* 2 3 4) → 24
(+) → 0
-5 → -5
괄호가 중쳡된 경우는 아래와 같다.

(* (+ 2 3) (- 5 3)) → 10
(/ (+ 9 1) (+ 2 3)) → 2
모두 괄호로 묶여있기 때문에 +, -, *, / 연산자 사이의 우선순위는 따로 신경쓸 필요 없다.
'''

import sys

def calc_list(l, operator):
    if operator == '+':
        return sum(l)
    elif operator == '-':
        v = l[0]
        for i in range(1,len(l)):
            v -= l[i]
        return v
    elif operator == '*':
        v = l[0]
        for i in range(1,len(l)):
            v *= l[i]
        return v
    elif operator == '/':
        v = l[0]
        for i in range(1,len(l)):
            v /= l[i]
        return int(v)
    else:
        return sum(l)

def process_str(s,depth):
    s = s.strip()
    #print("{}{}".format('  '*depth, s))
    depth += 1

    if s[0] == '(' and s[len(s) - 1] != ')':
        s = s[1:]
    if s[0] != '(' and s[len(s) - 1] == ')':
        s = s[:-1]
    if s[0] == '(' and s[len(s) - 1] == ')':
        s = s[1:-1]

    l = []
    operator = ''
    digit = ''
    digit_count = 0
    open_count = 0
    ret = 0
    x = -1

    for i in range(len(s)):
        if i <= x:
            continue
        if s[i] == '(':
            x = i
            open_count += 1
            while open_count != 0:
                x += 1
                if s[x] == ')': open_count -= 1
                if s[x] == '(': open_count += 1
            digit = process_str(s[i:x+1], depth)
            l.append(int(digit))
            digit_count += 1
            digit = ''
        elif s[i] in ['+', '-', '*', '/']:
            operator = s[i]
        elif s[i].isdigit():
            digit += s[i]
        elif s[i] == ' ':
            if digit != '':
                #print("{}{}".format('  '*depth, digit))
                l.append(int(digit))
                digit_count += 1
                digit = ''
        else:
            continue

    if digit != '':
        #print("{}{}".format('  '*depth, digit))
        l.append(int(digit))
        digit_count += 1
        digit = ''

    if digit_count == 0:
        return 0
    else:
        return calc_list(l,operator)

raw_s = input('> ')

depth = 0
v = process_str(raw_s,depth)

print("result : {}".format(v))


'''
깔끔한 Recursive.

def exp(E):
    if E[0] != '(': return E
    if E == '(+)':  return '0'
    if E == '(*)':  return '1'
    OP, T = E[1], E[3:-1]
    return str(eval(OP.join(term(T))))

def term(T):
    if T == '': return []
    head, tail = tsplit(T)
    return [exp(head)] + term(tail)

def tsplit(T):
    if T[0] != '(':
        p = (T+' ').find(' ')
        return T[:p], T[p+1:]
    else:
        depth = 0
        for p in range(len(T)):
            depth += (T[p] == '(') - (T[p] == ')')
            if depth == 0:
                return T[:p+1], T[p+2:]

print(exp('(- 10 3)'))
print(exp('(* 2 3 4)'))
print(exp('(*)'))
print(exp('(/ 10 (*) 5)'))
print(exp('(* (+ 2 3) (- 5 3))'))
print(exp('(/ (+ 9 1) (+ 2 3))'))
print(exp('(* (/ (+ 9 1) (+ 2 3)) 3)'))
print(exp('(* 2 3 (+ 1 4 5) 7 (- 9 1 (+ 2 3) 2) 2 1)'))
'''
