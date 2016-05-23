var fs       = require('fs'),
    util     = require('util'),
    imgsize  = require('image-size');

module.exports = (function(){
    var supportExt = ["jpg", "jpeg", "png"];  // supported extension array
    var dirPath = "";      // directory path
    var fileList = [];     // file name array

    // get filename list array length
    var getFileCount = function() {
        return fileList.length;
    };

    // set directory path for getting file list and infos
    var setDirPath = function(dirPath) {
        dirPath = dirPath;
    };

    // currently set directory path
    var getDirPath = function() {
        return dirPath;
    };

    // add supported file extension
    var addFileExt = function(extension) {
        supportExt.push(extension);
    };

    // get filename list from given directory path
    var getFileListWithPath = function(dirPath) {
        fileList = fs.readdirSync(dirPath);
        if( fileList == null ) {
            console.error("get file list error : " + error.errno);
            return null;
        }

        return fileList;
    };

    // return currently maintaining filename list
    var getFileList = function() {
        fileList = fs.readdirSync(dirPath);
        console.log("....." + dirPath);
        if( fileList == null ) {
            console.error("get file list error : " + error.errno);
            return null;
        }

        return fileList;
    };

    var getFileInfoAsync = function(dirPath, callback) {
        if( dirPath != null ) {
            setDirPath(dirPath);
        }

        fs.readdir(dirPath, function(err, files) {
            if(err) throw err;

            fileList = files;

            // John Resig (MIT Licensed)
            Array.prototype.remove = function(from, to) {
                var rest = this.slice((to || from) + 1 || this.length);
                this.length = from < 0 ? this.length + from : from;
                return this.push.apply(this, rest);
            };

            console.log(fileList.length);

            for(var i=0; i<fileList.length; i++) {
                ext = fileList[i].split('.').pop();

                if( supportExt.indexOf(ext) == -1 ) {
                    console.log("Unsupported file extension : " + ext);
                    fileList.remove(i);
                    continue;
                }

                var filePath = dirPath + "/" + fileList[i];

                (function(fPath) {
                    fs.stat(fPath, function(err, fileStat) {
                        if(err) throw err;

                        if( ! fileStat.isFile() ) {
                            return;
                        }

                        var dimen = imgsize(fPath);
                        var portland = dimen.height >= dimen.width ? "port" : "land";

                        // console.log("File [ " + fPath + "]");

                        var fileStatStr = util.inspect(fileStat);
                        var fileSize = fileStatStr.replace(/[{}, ]/g, '')
                                                  .split('\n')[8]
                                                  .split(':')[1];

                        var fileName = fPath.match(/[-_\w]+[.][\w]+$/i)[0];
                        // console.log(fileName);

                        var fileObj =   {
                                            filename: fileName, 
                                            filesize: fileSize, 
                                            portland: portland,
                                            img_height: dimen.height,
                                            img_width: dimen.width
                                        };

                        callback( fileObj );
                    });
                }(filePath));
            }
        });
    };    

    // read file stat from storage file and keep,return them
    var getFileInfo = function(dirPath,callback) {
        if( dirPath != null ) {
            setDirPath(dirPath);
        }

        getFileList();

        // John Resig (MIT Licensed)
        Array.prototype.remove = function(from, to) {
            var rest = this.slice((to || from) + 1 || this.length);
            this.length = from < 0 ? this.length + from : from;
            return this.push.apply(this, rest);
        };

        for(var i=0; i<fileList.length; i++) {
            ext = fileList[i].split('.').pop();

            if( supportExt.indexOf(ext) == -1 ) {
                console.log("Unsupported file extension : " + ext);
                fileList.remove(i);
                continue;
            }

            var filePath = dirPath + "/" + fileList[i];
            var fileStat = fs.statSync(filePath);
            if( ! fileStat.isFile() ) {
                continue;
            }
            var dimen = imgsize(filePath);
            var portland = dimen.height >= dimen.width ? "port" : "land";

            // console.log("File [ " + filePath + "]");

            var fileStatStr = util.inspect(fileStat);
            var fileSize = fileStatStr.replace(/[{}, ]/g, '')
                                      .split('\n')[8]
                                      .split(':')[1];

            var fileObj =   {
                                filename: fileList[i], 
                                filesize: fileSize, 
                                portland: portland,
                                img_height: dimen.height,
                                img_width: dimen.width
                            };

            callback(fileObj);
            // console.log(JSON.stringify(fileObj));
        }
    };

    return {
        addSupportFileExt: addFileExt,
        setDirPath: setDirPath,
        getFileCount: getFileCount,
        getDirPath: getDirPath,
        getFileList: getFileList,
        getFileListWithPath: getFileListWithPath,
        getFileInfo: getFileInfo,
        getFileInfoAsync: getFileInfoAsync
    };
}());
