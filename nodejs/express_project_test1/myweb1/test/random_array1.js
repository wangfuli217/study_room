var arr = new Array(2,3,82,1,232,12,32);

function getRandom(arr) {
    var result;
    var index = Math.floor(arr.length * Math.random());
    console.log("====> " + index);
    result = arr[index];
    return result;
}

console.log(getRandom(arr));
console.log(getRandom(arr));
console.log(getRandom(arr));
console.log(getRandom(arr));
