'''
우리의 친구 현우는 오늘도 어김없이 열심히 비트코인 시세표를 보고 있다!
그러다가 어느날 새로운 종목이 나타났는데
이 비트코인은 신기하게도 지금 1000원이였으면 1시간뒤에는 1002원 또 1시간이지나면 999원
또 한시간이 지나면 1003원 이된다고한다 (1+2-3+4-5...)
현우는 이 이랬다 저랫다 하는 비트코인을 1000원에사서
최고의 이득을 보려고 할 때 몇 시간 뒤에 팔아야 최고이득을 볼 수 있을까?
(단 이 비트코인의 가격이 0원 미만이 되어버리면 비트코인 자체가 없어져 버린다고 한다)
우리의 친구 현우를 위해 우리가 대신 구해줘 보자!
'''

price = 1000
count = 1
last_price = price

while price >= 0:
    count += 1
    if count % 2 == 0:
        change = count
    else:
        change = -count
    last_price = price
    print(" {} plus {}".format(last_price,change))
    price += change

print("{}  {}".format(count-1,last_price))
