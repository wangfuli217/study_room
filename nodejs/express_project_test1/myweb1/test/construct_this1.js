function Person(name) {
    this.name = name,
    this.introduce = function() {
        return 'My name is ' + this.name;
    }
};

var p1 = new Person('dplee');
console.log(p1.introduce());
