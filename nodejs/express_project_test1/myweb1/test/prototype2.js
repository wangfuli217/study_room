Array.prototype.random = function() {
    var index = Math.floor(this.length * Math.random());
    var result = this[index];
    return result;
}

var arr = new Array(2,3,82,1,232,12,32);

console.log(arr.random());
