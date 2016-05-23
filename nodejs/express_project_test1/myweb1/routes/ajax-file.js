var express  = require('express'),
    router   = express.Router(),
    fileinfo = require('../lib/fileinfo.js');

var fileObjArr = [];

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('ajax-file', {});

    fileObjArr = [];
    var dirPath = __dirname + "/../public/img/laos1";
    fileinfo.getFileInfoAsync(dirPath, function(fileObj) {
        console.log(JSON.stringify(fileObj));
        fileObjArr.push(fileObj);
    });
});

router.post('/pictureList', function(req, res, next) {
    // var someItems = fileObjArr.slice(1,100);
    res.json( JSON.stringify(fileObjArr) );
});

module.exports = router;
