const { createServer } = require('net');

const server = createServer(client => {
  console.log('CLIENT CONNECTED');
});

server.listen(7890, () => console.log('LISTENING ON 7890'));
