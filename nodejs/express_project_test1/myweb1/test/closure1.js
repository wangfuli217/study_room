function outer() {
    function inner() {
        var title = 'coding everybody';
        console.log(title);
    };

    inner();
};

outer();
