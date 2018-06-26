'''
1차원의 점들이 주어졌을 때, 그 중 가장 거리가 짧은 것의 쌍을 출력하는 함수를 작성하시오.
(단 점들의 배열은 모두 정렬되어있다고 가정한다.)
예를들어 S={1, 3, 4, 8, 13, 17, 20} 이 주어졌다면, 결과값은 (3, 4)가 될 것이다.
가장 거리가 짧은 것이 다수일 때는 모두 출력하시오.
'''

import sys, random

def getMinDiff( num_list ):
    minDiff = -1
    for i in range(0,len(num_list)):
        if i == 0:
            beforeNum = num_list[0]
            continue

        afterNum = num_list[i]
        diff = afterNum - beforeNum

        #print("===> (%d-%d) -> %d\n" %(afterNum, beforeNum, diff), end=' ')

        if minDiff == -1:
            minDiff = diff
        else:
            if diff < minDiff:
                minDiff = diff
        beforeNum = afterNum
    return minDiff

def printMinDiffPair( num_list, minDiff ):
    for i in range(0,len(num_list)):
        if i == 0:
            beforeNum = num_list[0]
            continue
        afterNum = num_list[i]
        diff = afterNum - beforeNum
        if diff == minDiff:
            print("(%d,%d)\n" %(beforeNum,afterNum), end='')
        beforeNum = afterNum

if __name__ == "__main__":
    num_list = list(set([random.randint(1,100) for i in range(10)]))
    num_list.sort()
    for i in num_list:
        print("%d " %(i), end='')
    print("\n", end='');

    minDiff = getMinDiff(num_list)
    print("min diff : %d\n" %(minDiff), end='' )

    printMinDiffPair(num_list, minDiff)

'''
아마 가장 짧은 하나의 쌍만 찾는 것이라면 O(N)이면 끝날 것이다.
그런데, 다수를 출력하는 것이라면 O(2N)보다 빠르게는 어려울 것이다.
'''
