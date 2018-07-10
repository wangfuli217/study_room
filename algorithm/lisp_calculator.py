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
            v += l[i]
        return v
    elif operator == '/':
        v = l[0]
        for i in range(1,len(l)):
            v /= l[i]
        return v
    else:
        return sum(l)

def process_str(s):
    operator = ''
    digit = ''
    is_open = 0
    ret = 0
    skip_count = 0
    count = 0

    for i in range(len(s)):
        if skip_count > 0:
            skip_count -= 1
            continue
        count += 1
        if s[i] == '(':
            if is_open == 0:
                l = []
                is_open = 1
            else:
                (digit,skip_count) = process_str(s[i:])
	        l.append(int(digit))
                is_open = 0
        elif s[i] in ['+', '-', '*', '/']:
            operator = s[i]
        elif s[i].isdigit():
            digit += s[i]
        elif s[i] == ' ':
            if digit != '':
	        l.append(int(digit))
                digit = ''
        elif s[i] == ')':
            ret = calc_list(l,operator)
            return (ret,count-1)
        else:
            continue

raw_s = raw_input()

v = process_str(raw_s)

print(v)
