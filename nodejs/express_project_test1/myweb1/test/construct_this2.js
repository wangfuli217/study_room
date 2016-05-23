var funcThis = null;

function Func() {
    funcThis = this;
}

var o1 = Func();
if( global === funcThis ) {
    console.log('global === funcThis');
}

var o2 = new Func();
if( o2 === funcThis ) {
    console.log('o2 === funcThis');
}
