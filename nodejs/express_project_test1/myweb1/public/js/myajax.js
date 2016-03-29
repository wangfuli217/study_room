(function($) {
    $.ajax({
        type: "post",
        url:'http://localhost:3000/myajax/ajax-json',
        dataType:'json',
        success:function(data){
            // $("#wrap p").append(data);
            var obj = $.parseJSON(data);
            for(var i =0; i<obj.length; i++) {
                $("#wrap .xx").append("<li>" + obj[i].no + ", " + obj[i].name + ", " + obj[i].job + "</li>");
            }
            // console.log("json length : " + obj.length);
        }
    });

    $("#wrap").append("<p>next test</p>");

    $.ajax({
        type: "post",
        url:'http://localhost:3000/myajax/ajax-jsonfile',
        dataType: 'json',
        success:function(data) {
            var obj = $.parseJSON(data);
            for(var i =0; i<obj.length; i++) {
                $("#wrap .yy").append("<li>" + obj[i].no + ", " + obj[i].name + ", " + obj[i].job + "</li>");
            }
        }
    });
}(jQuery));
