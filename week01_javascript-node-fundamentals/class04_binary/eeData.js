const EventEmitter = require('events');

const ee = new EventEmitter();

ee.on('createdUser', data => {
  console.log(data);
});

ee.emit('createdUser', { _id: 1234, name: 'ryan' })
