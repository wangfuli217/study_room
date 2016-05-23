

function aa() {
    var myapp = {};

    myapp.xx1 = 10;
    myapp.xx2 = 20;

    myapp.func1 = function() {
        console.log(myapp.xx1);
    };

    myapp.func2 = function() {
        console.log(myapp.xx2);
    };

    myapp.func1();
    myapp.func2();
};

aa();
