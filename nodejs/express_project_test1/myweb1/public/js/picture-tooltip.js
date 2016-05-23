(function($) {

$(document).ready(function() {

function checkImgSize() {
    console.log("ready....");

    // var img = document.getElementById("xxxx");
    // var width = img.width;
    // var height = img.height;

    // console.log("width : " + width + ", height : " + height);

    var i = 0;
    var img;
    var type;

    for(i=1; i<13; i++) {
        img = new Image();
        img.src = 'img/' + i + '.jpg';

        img.onload = function() {
            if(this.height > this.width) {
                console.log(this.src + " : portrait");
                type = "portrait";
            }
            else if(this.width > this.height) {
                console.log(this.src + " : landscape");
                type = "landscape";
            }
            else {
                console.log(this.src + " : square");
                type = "square";
            }

            if( type === 'landscape') {
                $(this).parent().css("height", "70px");
            }
        }
    }
}

function imgTooltip() {
    $('.item').each( function() {
        // console.log($(this).children().attr('src'));
        $(this).qtip({
            content: '<img src="' + $(this).children().attr('src') + '"/>',
            position: {
                // target: 'mouse',
                // adjust: { x:5, y:5 }
                viewport: $(window)
            },
            style: 'qtip-wikiki',
            hide: {
                fixed: true,
                delay: 100
            }
        });
    });
}

checkImgSize();
imgTooltip();

});
}(jQuery));
