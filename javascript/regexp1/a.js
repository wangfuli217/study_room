var str = "Html Css Jquery";
var reg1 = /css/; // var reg1 = new RegExp("css")

var result_1 = reg1.test(str);
document.write(result_1, "<br />");

var reg2 = /css/i; // var reg2 = new RegExp("css", "i")
var result_2 = reg2.test(str);
document.write(result_2,"<br />");
