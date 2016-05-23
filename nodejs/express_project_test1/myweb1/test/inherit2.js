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
Programmer.prototype.introduce = function() {
    return 'my name issssss ' + this.name;
}
Programmer.prototype.coding = function() {
    return 'coding';
}

var p1 = new Person('persion dplee');
console.log(p1.introduce());

var p2 = new Programmer('programmer dplee');
console.log(p2.introduce());
console.log(p2.coding());
