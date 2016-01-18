const EventEmitter = require('events');
const util = require('util');

function MyEmitter() {
    EventEmitter.call(this);
}

util.inherits(MyEmitter, EventEmitter);

const myEmitter = new MyEmitter();

myEmitter.once('newListener', function(event, listener) {
    if(event === 'event') {
        myEmitter.on('event', function() {
            console.log('B');
        })
    }
});

myEmitter.on('event', function() {
    console.log('A');
})

myEmitter.emit('event');
