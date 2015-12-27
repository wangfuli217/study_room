var userName = prompt("your name?");
reg1 = /^[가-힣]{2,5}$/;

while(true)
{
    if(reg1.test(userName)) break;

    alert("invalid name");
    userName = prompt("your name?");
}

var userCell = prompt("your phone?");
reg2 = /^(010|016|011)\d{3,4}\d{4}$/;
while(true)
{
    if(reg2.test(userCell)) break;

    alert("invalid phone number");
    userCell = prompt("your phone?");
}

var userEmail = prompt("your email?");
reg3 = /^\w{5,12}@[a-z]{2,10}[\.][a-z]{2,3}[\.]?[a-z]{0,2}$/;

while(true)
{
    if(reg3.test(userEmail)) break;
    alert("invalid email address");
    userEmail = prompt("your email?");
}

document.write(userName,"<br />");
document.write(userCell,"<br />");
document.write(userEmail,"<br />");
