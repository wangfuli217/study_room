var userEmail = prompt("your email?");
var mailList = [".co.kr", ".com", ".or.kr", ".org", ".net"];

var check1 = false;
var check2 = false;

if(userEmail.indexOf("@") > 0) check1 = true;

for(var i=0; i<mailList.length; i++)
{
    if( userEmail.indexOf(mailList[i]) > 0) check2 = true;
}

if(check1 && check2)
{
    document.write(userEmail);
}
else
{
    alert("invalid email address");
}