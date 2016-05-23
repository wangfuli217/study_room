

(function(arg) {
    var myapp = {
        xx1: 111,
        xx2: 222,
        xx3: arg,
        func1: function() {
            console.log( this.xx1 );
        },
        func2: function() {
            console.log( this.xx2 );
        },
        func3: function(arg) {
            console.log( arg );
        }
    };

    myapp.func1();
    myapp.func2();
    myapp.func3(arg);
}(1000));
