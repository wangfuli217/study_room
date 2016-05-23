var vscope = 'global';

function fscope() {
    var vscope = 'local';
    console.log(vscope);
};

function fscope2() {
    console.log(vscope);
};

fscope();
fscope2();
