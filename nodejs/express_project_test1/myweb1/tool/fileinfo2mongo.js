var finfo        = require('../lib/fileinfo.js'),
    db           = require("../lib/mongodb.js"),
    pictureInfos = require('../lib/schema/schemaPictureInfos.js');

var url = "mongodb://localhost:27017/test";

(function() {
    db.connect(url, function() {

        console.log("Connection Success");

        var dirPath = "../public/img/laos1";
        finfo.getFileInfoAsync(dirPath, function(fileObj) {

            var dataObj = {
                category1   : 'Family trip to Laos',
                category2   : 'Picutre 1',
                filename    : fileObj.filename,
                filesize    : fileObj.filesize,
                portland    : fileObj.portland,
                img_height  : fileObj.img_height,
                img_width   : fileObj.img_width,
                tag         : "",
                description : "description : " + fileObj.filename
            };

            var insObj = new pictureInfos(dataObj);

            insObj.save(function(err, data) {
                if(err) throw err;

                console.log("[ " + pictureInfos.collectionName + " ] =====================================");
                console.log("insert complete... : " + data.filename);
                console.log(data);
            });
        });
    });
}());
