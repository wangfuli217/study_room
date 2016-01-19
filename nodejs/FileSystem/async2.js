const file = require('fs');

file.rename('/tmp/hello', '/tmp/hello1', function(err){
    if(err) throw err;

    file.stat('/tmp/hello1', function(err,stats) {
        if(err) throw err;

        console.log(JSON.stringify(stats));
    })
})