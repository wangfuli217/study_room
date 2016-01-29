const file = require('fs');

file.rename('/tmp/hello1', '/tmp/hello1', function(err) {
    if(err) throw err;

    console.log("rename success");
});

file.stat('/tmp/hello', function(err,stats) {
    if(err) throw err;

    console.log(JSON.stringify(stats));
})
