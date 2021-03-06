const EventEmitter = require('events');
const util = require('util');

function MyEmitter() {
  EventEmitter.call(this);
}
util.inherits(MyEmitter, EventEmitter);

const myEmitter = new MyEmitter();

process.on('uncaughtException', function() {
  console.log('whoops! there was an error');
});

myEmitter.emit('error', new Error('whoops!'));
  // Prints: whoops! there was an error
