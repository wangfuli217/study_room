from datetime import datetime
import pandas_datareader.data as wb
import matplotlib.pyplot as plt
import pymysql

def getData():
    start = datetime(2018,11,1)
    end = datetime(2019,10,29)

    df = wb.DataReader('178320.KS', 'yahoo', start, end)
    print(dir(df))
    # df['Close'].plot()
    # plt.show()

getData()

conn = pymysql.connect(host='localhost',
                       port=3306,
                       user='root',
                       passwd='dpleedplee',
                       db='mysql',
                       charset='utf8',
                       autocommit=False)
curs = conn.cursor()
sql = 'select * from test1'
curs.execute(sql)

rows = curs.fetchall()
print(rows)

conn.close()

