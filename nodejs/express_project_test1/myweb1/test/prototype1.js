function x() {}
x.prototype.name = 'dplee';

function y() {}
y.prototype = new x();
y.prototype.email = 'cloudrain21';

function z() {}
z.prototype = new y();
y.prototype.address = 'Gochon';

var o = new z();
console.log(o.name + ", " + o.email + ", " + o.address);
