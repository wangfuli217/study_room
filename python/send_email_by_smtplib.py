import smtplib
smtpObj = smtplib.SMTP('smtp.gmail.com', 587)
smtpObj.ehlo()
smtpObj.starttls()
smtpObj.login('linuzang@gmail.com', 'password')

smtpObj.sendmail('linuzang@gmail.com', 'cloudrain21@gmail.com', 'Subject : python email test\nIf you got this email, the email test is working well...\n')
# -> if fail(error tells login via web browser), go to https://myaccount.google.com/security?pli=1#connectedapps, configure allowing login through unauth apps.
smtpObj.close()

# if you want to send utf-8 charaters
smtpObj.sendmail('linuzang@gmail.com', 'inwonns@naver.com', 'Subject : 인원아... 동표다.\n내가 너의 하늘같은 남편인 것을 항상 잊지 말아라....\n')
# -> This is failure, because default character set is ascii.

from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
msg = MIMEMultipart("alternative")
msg["Subject"] = u'인원아... 동표다..'
part1 = MIMEText(u'내가 너의 하늘같은 남편인 것을 항상 잊지 말아라...', 'plain', 'utf-8')
msg.attach(part1)
smtpObj.sendmail('linuzang@gmail.com', 'inwonns@naver.com', str(msg))
smtpObj.close()
