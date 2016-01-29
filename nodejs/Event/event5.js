const EventEmitter = require('events');
const util = require('util');

function MyEmitter() {
  EventEmitter.call(this);
}
util.inherits(MyEmitter, EventEmitter);

const myEmitter = new MyEmitter();

var m = 0;

myEmitter.once('event', function() {
  console.log(++m);
});

myEmitter.emit('event');
  // Prints: 1
myEmitter.emit('event');
  // Prints: 2
