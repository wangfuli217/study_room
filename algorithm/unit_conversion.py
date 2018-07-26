'''
당신은 어떤 그래픽 처리 라이브러리를 제작하고 있다.
라이브러리의 사용자는 다양한 단위를 이용해 데이터를 입출력하기 때문에
이 라이브러리에는 단위 변환기가 포함되어야 한다.
아래 조건에 따라 단위 변환 함수를 제작하라.

단위 변환기는 다음 단위들을 입력받아 다른 단위로 변환할 수 있어야 한다.

inch(인치)
cm(센티미터)
mm(밀리미터)
px(픽셀)
pt(포인트)
dxa(20분 포인트)
emu(EMU)

당신은 변환율 상수를 꼭 필요한 만큼만 정의할 생각이다.
라이브러리의 메모리 사용량을 최소화하는 목적도 있고,
여러 개의 상수를 손으로 입력하다 보면 실수로 버그를 만들 위험도 있기 때문이다.
당신은 백과사전을 뒤져서 믿을 수 있는 변환율 여섯 개를 찾아냈다.
당신은 아래에 있는 변환율만을 정의하여야 하며,
각 단위에서 다른 단위로 모든 경우의 변환을 지원해야 한다.

1 inch  =  2.54 cm
1 cm    =    10 mm
1 inch  =    72 pt
1 inch  =    96 px
1 pt    =    20 dxa
1 dxa   =   635 emu

입력: 단위 변환기는 두 개의 인수를 입력받는다.
첫 번째 인수는 한 단위의 수를 표현한 문자열이고
두 번째 인수는 변환하고자 하는 단위를 표현한 문자열이다.

출력: 변환된 수와 단위를 문자열로 출력한다.

입출력예:
param1         param2     result
===================================
"10 cm"        "cm"       "10 cm"
"10 inch"      "mm"       "254 mm"
"1024 px"      "pt"       "768 pt"
"768 px"       "inch"     "8 inch"
"9144000 emu"  "inch"     "10 inch"
"12000 dxa"    "px"       "800 px"
'''

import numpy as np

[inch,cm,mm,px,pt,dxa,emu] = [x for x in range(7)]
s = {'inch':0, 'cm':1, 'mm':2, 'px':3, 'pt':4, 'dxa':5, 'emu':6}

m = np.zeros((7,7))

m[inch,  cm] = 2.54
m[cm,    mm] = 10
m[inch,  pt] = 72
m[inch,  px] = 96
m[pt,   dxa] = 20
m[dxa,  emu] = 635

for i in range(m.shape[0]):
    for j in range(m.shape[1]):
        if m[i,j] != 0:
            m[j,i] = 1/m[i,j]
            for k in range(j):
                if m[i,k] != 0:
                    m[j,k] = m[i,k] / m[i,j]
                    m[k,j] = m[i,j] / m[i,k]
        if i == j: m[i,j] = 1

(v,inu,outu) = ( input().split() )
(i,j) = (s[inu], s[outu])

print( m[i,j] * float(v) )

'''
better solution
위처럼 무식하게 map 을 만들 필요까지는 없고,
주어진 조건을 이용하여 한 단위를 기준으로 한 dictionary 를 만든다.
unit = {'inch':1,
        'cm':2.54,
        'mm':25.4,
        'pt':72,
        'px':96,
        'dxa':72*20,
        'emu':72*20*635
        }

def chg_unit(param1, param2):
    num, du = param1.split(" ")
    cu = param2
    print (num, du, float(num)*unit[cu]/unit[du], cu)

chg_unit("10 cm", "cm")
chg_unit("10 inch", "mm")
chg_unit("1024 px", "pt")
chg_unit("768 px", "inch")
chg_unit("9144000 emu", "inch")
chg_unit("12000 dxa", "px")
'''
