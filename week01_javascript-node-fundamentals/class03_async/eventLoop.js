
const fs = require('fs');
const http = require('http');
const request = require('superagent');

console.log('A - Start of file');

fs.readFileSync('README.md');

console.log('A.1/2 - after readFileSync');

[1, 4, 6].forEach(n => console.log(n));

fs.readFile('./eventLoop.js', 'utf8', (err, data) => {
  console.log('B - event-loop.js callback');
});

http.createServer((req, res) => {
  console.log('C - web server callback');
  res.end();
}).listen(8080);

setTimeout(() => {
  console.log('D - setTimeout 1000 callback');
}, 1000);

request.get('www.google.com').end((err, res) => {
  console.log('E - get google callback');
});

console.log('F - End of file');
