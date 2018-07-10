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
