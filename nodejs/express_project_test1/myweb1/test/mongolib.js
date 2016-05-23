var mongocli = require('mongodb').MongoClient;
var mongosvr = require('mongodb').Server;
var assert = require('assert');

var db = {};

module.exports = {
    connect: function(url) {
        db.url = url;

        mongocli.connect(url, function(err, database) {
            assert.equal(null, err);
            db.con = database;
            console.log("Connected correctly to server. typeofdb : " + typeof db);
        });
    },

    close: function() {
        db.con.close();
        db.con = null;
        console.log("db closed.");
    }
}
