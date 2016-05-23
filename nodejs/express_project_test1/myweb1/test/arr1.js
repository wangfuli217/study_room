var arr = [];

arr.push( { 'aa': {id:11} } );
arr.push( { 'bb': {id:22} } );
arr.push( { 'cc': {id:33} } );

for( var i = 0 ; i< arr.length; i++ )  {
    console.log(typeof arr[i]['aa']);

    for (var name in arr[i] ) {
        console.log(name);
        console.log(arr[i][name].id);
    }
}
