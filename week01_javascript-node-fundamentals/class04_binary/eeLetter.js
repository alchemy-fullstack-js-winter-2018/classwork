const EventEmitter = require('events');

const ee = new EventEmitter();

ee.on('letter', letter => console.log(`RECEIVED: ${letter}`));

'hi there we are emitting events'
  .split('')
  .filter(character => character !== ' ')
  .forEach(letter => ee.emit('letter', letter));
