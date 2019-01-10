const EventEmitter = require('events');

const ee = new EventEmitter();

ee.on('we did it', () => {
  console.log('Yes we did');
});

ee.on('we did it', () => {
  console.log('Did we really?');
});

ee.emit('we did it');
ee.emit('we did it');
ee.emit('we did it');
