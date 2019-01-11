const { Buffer } = require('buffer');

const b = Buffer.alloc(10, 'a');
console.log(b);

const buf = Buffer.from('😐');
console.log(buf.toString());

console.log(buf.map(byte => {
  return 104;
}).toString());

const smile = Buffer.from([0xF0, 0x9F, 0x98, 0x90]);
console.log('😐');
