
price = 1000
count = 0
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
