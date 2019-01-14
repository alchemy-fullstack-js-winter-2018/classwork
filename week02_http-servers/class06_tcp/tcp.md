# TCP

## Create a TCP server

* Use `createServer` to create a new TCP server
  * On each client connection `console.log` "Client connected"
* `listen` on port `7890`
  * add a callback to print "Server listening on 7890"




















## Create a TCP client

* Use `createConnection` to connect to port `7890`
* use `pipe` to print data from the server to
  `process.stdout`
* Why do we see a buffer?
  * HINT: look up `setEncoding`
















## Listen to data on the server

* add a listener to the `data` event on each client
  * `console.log` 'Client: \`${data}\`'
* add a listener to the `end` event
  * `console.log` 'Client disconnected'














## Improved Client

* lookup the `readline` node API
* use `readline.createInterface` to create a new readline
  interface
  * use `process.stdin` for input and `process.stdout` for
    output
  * Add a prompt
* `on` every data event use your readline interface to
  `write` the data to your console
  * HINT: you may want to append a `\n`
* after your client connects
  * create a new `prompt`
  * for each new line `write` the line to the client and
    then reprint the `prompt`

* Make server echo data sent to it by client
  * Client should receive back ("ECHO: ${data}")
* Keep track of clients. Give each client a unique name
  * Client should receive back "ECHO ${clientName}: ${data}"
