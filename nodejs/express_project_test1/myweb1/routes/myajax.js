var express = require('express');
var router = express.Router();
var fs = require('fs');

/* POST home page. */
router.get('/', function(req, res, next) {
  res.render('myajax', { title: 'Express' });
});

router.get('/ajax-text', function(req, res, next) {
    console.log(req.body.objectData);
    res.contentType('text');
    res.send("This is ajax xxxx text test....");
});

router.post('/ajax-json', function(req, res, next) {
    res.contentType('json');
    res.send( JSON.stringify(
          `
          [ { "no" : "first", "name" : "Jung", "job" : "dddgagman"},
            { "no" : "second", "name" : "Ryu",  "job" : "gagman"},
            { "no" : "third", "name" : "Noh",  "job" : "entertainer"} ]
        `));
});

// http://expressjs.com/en/guide/routing.html
router.post('/ajax-jsonfile', function(req, res, next) {
    console.log("current directory : " + __dirname);
    fs.readFile(__dirname + '/../public/data/ajax-json.json', 'UTF-8', function(err, data) {
        if(err) {
            return console.error(err);
        }
        console.log("[[[[ " + data + "]]]]");
        // res.contentType('json');
        res.json( data );
    })
});

module.exports = router;
