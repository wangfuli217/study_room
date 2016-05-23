var o = {
    val: 111,
    func1: function() {
        if( global === this ) {
            console.log("global === this");
        } else if( o === this ) {
            console.log("o === this");
        } else {
            console.log("etc");
        }
    }
};

o.func1();
