function Person(name) {
    this.name = name;
}

Person.prototype.name = null;
Person.prototype.introduce = function() {
    return 'my name is ' + this.name;
}

function Programmer(name) {
    this.name = name;
}

Programmer.prototype = new Person();

var p1 = new Programmer('dplee');
console.log(p1.introduce());
