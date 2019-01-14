const { createConnection } = require('net');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '> '
});

const client = createConnection(7890, () => {
  rl.prompt();
  rl.on('line', line => {
    client.write(line);
    rl.prompt();
  });
});

client.setEncoding('utf8');

client.on('data', data => {
  rl.write(`${data}\n`);
});
