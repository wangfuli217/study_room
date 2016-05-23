var xx = require('./callee.js')
var ret;

ret = xx.func1(111);
console.log(ret);

ret = xx.func2('222');
console.log(ret);

ret = xx.obj1.func3(222);
console.log(ret);

ret = xx.obj1.func4('222');
console.log(ret);

