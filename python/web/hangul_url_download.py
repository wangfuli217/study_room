'''
GnGuide 에서 기업별 실적을 정리한 파일들을 묶은 zip 파일을 다운받으려는데
url 에 한글이 들어간 경우 계속 에러(UnicodeEncodeError)가 나서 아래 글을 읽고 해결함.

http://blog.naver.com/PostView.nhn?blogId=teenager4282&logNo=220981372946&parentCategoryNo=&categoryNo=43&viewDate=&isShowPopularPosts=false&from=postView
https://dololak.tistory.com/255
'''

from urllib.request import urlopen
from urllib.parse import quote_plus
import re

if __name__ == '__main__':
    url = 'http://comp.fnguide.com/SVO2/ASP/' \
        + 'SVD_ProResultCorp.asp?pGB=1&gicode=&cID=&MenuYn=&ReportGB=&NewMenuID=&stkGb=&strResearchYN2=&gs_ym=&srcGB='
    webPageContent = ''

    with urlopen(url) as f:
        webPageContent = f.read().decode()
        #with open('webcontent.txt', 'w') as wf:
        #    wf.write(webPageContent)

    match = re.findall(r'(http:.+/)(2[0-9]{3})(.+?)([0-1][0-9])(.+?)(\.zip)', webPageContent, re.DOTALL)

    # match => [('http://file.fnguide.com/upload1/Download/excel/', '2019', '년', '06', '월확정실적', '.zip')]

    '''
        findall 로 찾은 문자열 중 한글부분만 quote_plus 를 통해 encode 해줌.
    '''
    zipurl  = match[0][0]
    zipurl += match[0][1]
    zipurl += quote_plus(match[0][2])
    zipurl += match[0][3]
    zipurl += quote_plus(match[0][4])
    zipurl += match[0][5]
    #print("==> %s" %zipurl)

    zipFileName = match[0][1] + match[0][3] + match[0][5]

    with urlopen(zipurl) as f:
        with open(zipFileName, 'wb') as l:
            l.write(f.read())
