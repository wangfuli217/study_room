var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var collectionName = 'pictureInfos';

var schema4ColPictureDesc = new Schema({
    'category1': String, 
    'category2': String, 
    'filename': String, 
    'filesize': Number, 
    'portland': String,
    'img_height': Number, 
    'img_width': Number, 
    'tag': String,
    'description': String 
}, {collection: collectionName, versionKey: false});

var Model = mongoose.model(collectionName, schema4ColPictureDesc);

module.exports = Model;
module.exports.collectionName = collectionName;