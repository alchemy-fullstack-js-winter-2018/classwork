const EventEmitter = require('events');

const ee = new EventEmitter();

ee.on('EVENT', () => console.log('HIHIHI'));

ee.emit('EVENT')
