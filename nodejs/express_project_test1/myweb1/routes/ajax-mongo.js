var express      = require('express'),
    router       = express.Router(),
    mongoose     = require('mongoose'),
    Schema       = require('mongoose').Schema,
    pictureInfos = require('../lib/schema/schemaPictureInfos.js'),
    db           = require('../lib/mongodb.js'),
    fs           = require('fs'),
    path         = require('path'),
    JSZip        = require('jszip'),
    archiver     = require('archiver');

var fileObjArr = [];

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('ajax-mongo', {});

    var url = "mongodb://localhost:27017/test";

    fileObjArr = [];

    db.connect( url, function() {
        pictureInfos.find( {}, function(err, docs) {
            if(err) throw err;

            fileObjArr = docs;
            db.disconnect();
        });
    });
});

router.post('/pictureList', function(req, res, next) {
    // var someItems = fileObjArr.slice(1,100);
    res.json( JSON.stringify(fileObjArr) );
});

router.post('/downloadImagesZip', function(req, res, next) {
    var urlArr = req.body.arr;
    console.log("length : " + urlArr.length);

    // var outputPath = __dirname + "/xxx";
    // var output = fs.createWriteStream(err, outputPath);
    // var zipArchive = archiver('zip');
    
    // output.on('close', function() {
    //     console.log('done with the zip' + outputPath);
    // });

    // zipArchive.pipe(output);

    // var fileArr = [];
    // var srcDir = __dirname + "/../public/img/";

    // for(var i=0; i<urlArr.length; i++) {
    //     var urlSplit = urlArr[i].split('/');
    //     var len = urlSplit.length;
    //     var filename = urlSplit[len-1];

    //     var srcFile = urlSplit[len-2] + "/" + filename;

    //     fileArr.push(srcFile);
    // }

    // zipArchive.bulk([
    //     { src: fileArr, cwd: srcDir, expand: true }
    // ]);

    // zipArchive.finalize( function(err, bytes) {
    //     if(err) throw err;

    //     console.log('done:', base, bytes);
        
        res.end("laos1/11.zip");
    // })

    //http://stackoverflow.com/questions/15641243/need-to-zip-an-entire-directory-using-node-js
});

router.post('/fileupload', function(req, res, next) {
    console.log("fileupload request");
    console.log(req.body.size);
});


module.exports = router;
