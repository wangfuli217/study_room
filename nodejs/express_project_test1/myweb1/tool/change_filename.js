var fs = require('fs');

var dirPath = "../public/img/laos1/thumbnail";

(function(path) {
    fs.readdir(path, function(err, files) {
        
        for(var i=0; i<files.length; i++) {
            var ext = files[i].split('.').pop();
            if( ext != 'jpg' ) {
                continue;
            }

            var filename = files[i].split('.')[0];

            var from = path + "/" + filename + ".jpg";
            var tmp  = from;
            var to   = tmp.replace("_thumbnail", '');
            console.log("rename from " + from + " to " + to);

            fs.rename(from, to, function(err) {
                if(err) throw err;
            });
        }
    });
}(dirPath));