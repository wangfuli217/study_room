

(function(arg) {
    var myapp = {};

    myapp.xx1 = 10;
    myapp.xx2 = 20;
    myapp.xx3 = arg;

    myapp.func1 = function() {
        console.log(myapp.xx1);
    };

    myapp.func2 = function() {
        console.log(myapp.xx2);
    };

    myapp.func3 = function() {
        console.log(myapp.xx1 + myapp.xx2 + myapp.xx3);
    };

    myapp.func1();
    myapp.func2();
    myapp.func3();
}(1000));
