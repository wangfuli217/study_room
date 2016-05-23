function sum(x,y) { return x + y; };

var sum2 = new Function('x', 'y', 'return x+y;');

console.log(sum(1,2));
console.log(sum2(1,2));
