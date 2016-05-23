var func1 = function() {
    console.log(arguments.length);
    for(var i=0; i<arguments.length; i++) {
        console.log(arguments[i]);
    }
};

func1(1,2,3,4);
