
#insert into vl_trace_info_if values (
#    '15000000000000000000000000000001', to_char(sysdate, 'yyyymmddhh24missSSS'), 'I', to_char(sysdate, 'yyyymmddhh24missSSS'), 'N', NULL,
#    102441507, '201501000005', 'PS4804361942', '4810105', '4800000033', '20150516233140', 0, '201505162331', 46338639, 12552029, '1', NULL);
#      b           c              d               e           f             g                    h              i         j

import os

a = 15000000000000000000000000000001
b = 102441507
c = 201501000005
d = 4804361942
e = 4810105
f = 4800000033
g = 20150516233140
h = 201505162331
i = 46338639
j = 12552029

def make_string(idx):
    str1 = 'insert into vl_trace_info_if values (' + \
           '\'' + str(a+idx) +  '\', '   + \
           'to_char(sysdate, \'yyyymmddhh24missSSS\'), \'I\', to_char(sysdate, \'yyyymmddhh24missSSS\'), \'N\', NULL, ' + \
           str(b+idx) +  ', '            + \
           '\'' + str(c+idx)   +  '\', ' + \
           '\'PS' + str(d+idx) +  '\', ' + \
           '\'' + str(e+idx)   +  '\', ' + \
           '\'' + str(f+idx)   +  '\', ' + \
           '\'' + str(g+idx)   +  '\', ' + \
           '0'  + ', '                   + \
           '\'' + str(h+idx)   +  '\', ' + \
           str(i+idx) + ', '             + \
           str(j+idx) + ', '             + \
           '\'1'  + '\', '               + \
           'NULL );\n'
    return str1

def main():
    f = open('data.sql', 'w');
    f.truncate();

    for i in range(1,10000):
        write_string = make_string(i)
        f.write(write_string);
        if i % 1000 == 0:
            f.write('commit;\n')

    f.close();

if __name__ == '__main__':
    main()
