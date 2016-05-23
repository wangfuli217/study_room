function outer() {
    var title = "codding";

    return function() {
        console.log(title);
    };
};

var inner = outer();
inner();
