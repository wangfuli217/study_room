function outer() {
    var title = 'coding everybody';
    function inner() {
        console.log(title);
    };

    inner();
};

outer();
