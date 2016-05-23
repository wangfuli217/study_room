var arr = [];

for(var i=0; i<5; i++)
{
    arr[i] = function(id) {
        return function() {
            return id;
        };
    }(i);
}

console.log(arr.length);

for(var index in arr) {
    console.log(arr[index]());
}
