const file = require('fs');

file.watch('/tmp/hello', function(event, filename) {
    console.log(event);

    if(filename) {
        console.log('filename : ' + filename);
    }
    else {
        console.log('filename not given');
    }
})