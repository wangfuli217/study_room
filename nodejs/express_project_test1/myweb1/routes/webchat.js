var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.sendFile(__dirname + "/webchat.html");
});


router.socksvr = function(server) {
    var io = require('socket.io').listen(server);

    io.on('connection', function(socket){
        console.log("User Connected");

        socket.on('chat message', function(msg){
            io.emit('chat message', msg);
            console.log('message: ' + msg);
        });

        socket.on('disconnect', function(msg){
            console.log("User DisConnected");
        });
    });
}

module.exports = router;
