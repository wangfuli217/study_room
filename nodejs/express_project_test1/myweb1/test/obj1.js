var obj = {};

obj.aa = 111;
obj.bb = function(val) {
    return val + 111;
};
obj.print = function(arg) {
    console.log(arg);
};

obj.print('this is print string : ' + obj.bb(obj.aa));

function sum(obj1,obj2) {
    return obj1.bb(obj1.aa) + obj2.bb(obj2.aa);
};

var obj1 = obj;
var obj2 = obj1;

console.log( sum(obj1, obj2) );
