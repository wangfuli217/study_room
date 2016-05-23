var mongoose = require('mongoose'),
    Schema   = require('mongoose').Schema;

module.exports = (function() {
    var defaultUrl = "mongodb://localhost:27017/test";
    var url = defaultUrl;
    var conn;

    var connect = function(url, callback) {
        dburl = url;

        conn = mongoose.connect(url, function(err) {
            if(err) throw err;
            callback();
        });
    };

    var disconnect = function() {
        conn.disconnect();
    };

    return {
        connect: connect,
        disconnect: disconnect
    };
}());
