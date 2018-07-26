import numpy as np

[inch,cm,mm,px,pt,dxa,emu] = [x for x in range(7)]

m = np.zeros((7,7),dtype=int)

m[inch,  cm] = 2.54
m[cm,    mm] = 10
m[inch,  pt] = 72
m[inch,  px] = 96
m[pt,   dxa] = 20
m[dxa,  emu] = 635

print(m)
print("")

for i in range(m.shape[0]):
    for j in range(m.shape[1]):
        if m[i,j] != 0:
            print(m[i,j])
            m[j,i] = round(1/m[i,j],2)

print(m)
