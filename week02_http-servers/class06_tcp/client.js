const { createConnection } = require('net');
const { createInterface } = require('readline');

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '> '
});

const client = createConnection(7890, () => {
  rl.prompt();

  // listen to line events and write data to server
  rl.on('line', line => {
    rl.prompt();
    // write data to the server
    client.write(line);
  });
});

// use rl to print data from server to console
client.on('data', data => {
  rl.write(data);
});
