var i = 5;

function a() {
    var i = 10;
    b();
    c(i);
};

function b() {
    console.log(i);
};

function c(arg) {
    console.log(arg);
};

a();
