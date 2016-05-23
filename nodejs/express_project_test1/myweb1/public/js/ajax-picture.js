(function($) {

$(document).ready(function() {

// function addToImageGrid(obj) {
//     var htmlstr = "<div class='item'><img src='img/laos1/" 
//                 + obj.filename 
//                 + "' class='" 
//                 + obj.portland 
//                 + "' alt='thumbnail'></div>";

//     console.log(htmlstr);
//     $(".grid").append(htmlstr);
// }

var imgObjArr = [];
var cursorX, cursorY;
var arrSelectedSrc = [];
// var socket = io();

function addToImageGrid(idx,obj) {
    var alt = "img-" + idx;
    var htmlstr = "<div class='item' " 
                    + "alt='"+ alt + "'" 
                    + " style=\"background-image:url('img/laos1/thumbnail/" 
                    + obj.filename 
                    + "')\">" 
                    + "<div class='overlay'></div>"
                    + "<a href='#' class='download' download>"
                    + "<img src='img/icons/download.png' class='download_img'>"
                    + "</a>"
                    + "<img src='img/icons/check.png' class='check_img'>"
                    + "</div>";

    // console.log(htmlstr);
    $(".grid").append(htmlstr);
}

function imgTooltip() {
    $('.item').each( function() {
        var src = $(this).css('background-image');
        src = src.split('\"')[1];

        var alt = $(this).attr("alt");
        alt = alt.split("-")[1];

        $(this).qtip({
            content: '<em>' + src + '</em>' + '<img src="' + src + '"/>' + '<p class="note">this is description</p>',
            position: {
                // target: 'mouse',
                // adjust: { x:5, y:5 },
                viewport: $(window)
            },
            style: 'qtip-wiki',
            hide: {
                fixed: true,
                delay: 100
            }
        });
    });
};

function imgTooltipOne(element, src) {
    element.qtip({
        content: '<em>' + src + '</em>' + '<img src="' + src + '"/>' + '<p class="note">this is description</p>',
        position: {
            // target: 'mouse',
            // adjust: { x:5, y:5 },
            viewport: $(window)
        },
        style: 'qtip-wiki',
        hide: {
            fixed: true,
            delay: 100
        }
    });
};


function selectItem() {
    $(".item").on("click", function() {

        var src = $(this).css('background-image');
        src = src.split('\"')[1];
        src = src.replace("thumbnail/", "");

        var index = arrSelectedSrc.indexOf(src);
        
        var download_img_node = $("a",this).children("img:nth(0)");
        var check_img_node = $(".check_img",this);
        var overlay_node = $(".overlay",this);

        if( index == -1 ) {
            $(this).css("border", "rgb(11,120,215) solid 4px");
            arrSelectedSrc.push(src);

            check_img_node.css("visibility", "visible");
            overlay_node.css("opacity", "0.5");

            console.log("added src : " + src);
            console.log("selected src count.. : " + arrSelectedSrc.length);
        } else {
            $(this).css("border", "none");
            
            check_img_node.css("visibility", "hidden");
            overlay_node.css("opacity", "0.0");

            arrSelectedSrc.splice(index,1);

            console.log("selected src count : " + arrSelectedSrc.length);
        }
    });
}


function mouseoverItem() {
    $(".item").on("mouseover", function() {
        $(this).css("width", "200px")
               .css("height", "200px")
               .css("transform", "rotate(360deg)")
               .css("-webkit-transform", "rotate(360deg)");
    });
    
    $(".item").on("mouseout", function() {
        $(this).css("width", "60px")
               .css("height", "60px")
               .css("transform", "rotate(360deg)")
               .css("-webkit-transform", "rotate(360deg)");
    });
}

function downloadItem() {
    $(".download").on("click", function(e) {
        e.stopPropagation();

        var parent = $(this).parent();
        var src = parent.css('background-image');
        src = src.split('\"')[1];
        src = src.replace("thumbnail/", "");

        $(this).attr("href", src);

        console.log("downloading.... " + src);
    });
}


$(".picture-list").click( function() {
    var list = [];
    var alt = $(this).attr("alt");

    $.ajax({
        type: "post",
        url:'http://localhost:3000/ajax-' + alt + '/pictureList',
        dataType:'json',
        success:function(data) {
            $(".grid").empty();

            imgObjArr = [];
            imgObjArr = $.parseJSON(data);

            for(var i =0; i<imgObjArr.length; i++) {
                console.log( "json data : " 
                             + imgObjArr[i].filename + "," 
                             + imgObjArr[i].filesize + ","
                             + imgObjArr[i].img_height + ","
                             + imgObjArr[i].img_width);
                addToImageGrid(i, imgObjArr[i]);
            }

            // imgTooltip();
            // mouseoverItem();
            selectItem();
            downloadItem();
        }
    });
});

$(".download-selected-list").click( function() {
    var alt = $(this).attr("alt");

    $.ajax( {
        type: "post",
        url:'http://localhost:3000/ajax-' + alt + '/downloadImagesZip',
        contentType: 'application/json',    // to server
        data: JSON.stringify({"arr":arrSelectedSrc}),
        dataType: 'text',                   // from server
        // dataType: 'binary',              // from server
        processData: false,
        success: function(zipfile) {
            console.log("zip filename... : " + zipfile);

            var url = "http://localhost:3000/img/" + zipfile;
            var append_tag = "<a href="
                           + "'" + url + "'"
                           + " style='visibility: hidden; bottom: -10000px'"
                           + " class='hidden_download' download></a>";
            
            // location.href = "http://localhost:3000/img/" + recvdata;

            $("#download_div").append(append_tag);
            console.log(append_tag);

            $(".hidden_download").on( "click", function() {
                location.assign(url);
            });

            $(".hidden_download").trigger("click");
        },
        error: function(req,status,error) {
            // console.log("code:"+req.status+"\n"+"message:"+req.responseText+"\n"+"error:"+error);
            console.log("code:"+req.status+"\n"+"error:"+error);
        }
    });
});

(function() {
    if (window.File && window.FileReader && window.FileList && window.Blob) {
        console.log("File API support");
    } else {
        alert("File API not support");
        return;
    }
    
    var socket = io();

    function handlefiles(evt) {
        var files = evt.target.files; // FileList object

        console.log("connection success.");

        // Loop through the FileList and render image files as thumbnails.
        for (var i = 0, f; f = files[i]; i++) {

            // Only process image files.
            if (!f.type.match('image.*')) {
                continue;
            }

            var reader = new FileReader();

            // Closure to capture the file information.
            reader.onload = (function(theFile) {
                return function(e) {
                    // send file content here  e.target.result

                    console.log(theFile.name + ", " + theFile.size);
                    socket.emit('Upload', {'Name':theFile.name, Data:e.target.result});
                }
                socket.emit('Start', {'Name':theFile.name, 'Size':theFile.size});
                // socket.close();
            }(f));

            reader.readAsArrayBuffer(f);
        }        
    }

    socket.on('connection', function() {
        var fileSelect = document.getElementById("fileSelect"),
        fileElem = document.getElementById("fileElem");
        fileElem.addEventListener("change", handlefiles, false);

        fileSelect.addEventListener("click", function (e) {
            if (fileElem) {
                fileElem.click();
            }
            e.preventDefault();
        }, false);
    });
}());


document.onmousemove = function(e) {
    cursorX = e.pageX;
    cursorY = e.pageY;
    // console.log("x : " + cursorX + ", y : " + cursorY);
}

});
}(jQuery));
