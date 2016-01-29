require('fs').writeFile('/tmp/hello', 'Hello Test', function(err) {
    if(err) {
        console.log('error ocurred');
    }
    else {
        console.log('no error');
    }
})