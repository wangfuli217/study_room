var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var url = 'mongodb://localhost:27017/test';

MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log("Connected correctly to server.");

    insertDocument(db, function() {
        db.close();
    });
});

var insertDocument = function(db, callback) {
   db.collection('family_pic').insertOne( {
      "filename" : "1.jpg",
      "filesize" : "223122",
      "dimension" : "port"
   }, function(err, result) {
       assert.equal(err, null);
       console.log("Inserted a document into the restaurants collection.");
       callback();
  });
};
