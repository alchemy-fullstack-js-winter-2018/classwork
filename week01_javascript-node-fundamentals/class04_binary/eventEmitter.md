# Event Emitter

## Simple EventEmitter

* Create a `ee.js`
* require EventEmitter
  * `const EventEmitter = require('events');`
* create a `const ee = new EventEmitter()`
* listen to an event (e.g. `ee.on('we did it', () => {})`)
  * handle the event with a callback that `console.log('Yes we did')`
  * (e.g. `ee.on('we did it', () => console.log('Yes we did'))`)
* emit the `we did it` event with `ee.emit`











## Data EventEmitter

* Create a `eeData.js`
* require EventEmitter
  * `const EventEmitter = require('events');`
* create a `const ee = new EventEmitter()`
* listen to an event (e.g. `ee.on('we did it with data', data => {})`)
  * handle the event with a callback that `console.log(data)`
* emit the `we did it with data` event with `ee.emit`
  * NOTE: You need to send data!

## Letter EventEmitter

* Create a `eeLetter.js`
* require EventEmitter
  * `const EventEmitter = require('events');`
* create a `const ee = new EventEmitter()`
* listen to an event (e.g. `ee.on('letter', data => {})`)
  * handle the event with a callback prints "RECEIVED: ${letter}"
* iterate through the letters in a string and emit `forEach` letter
  * HINT: You'll need to use `split('')` and `forEach`

## Letter EventEmitter class

* Create a `LetterEmitter` class in `LetterEmitter.js`
  * `LetterEmitter` should `extends` `EventEmitter`
* Write a `read(str)` method that takes a string
  * read should `split` the string into letters
  * `forEach` letter it should emit an event
    * the event should include the data `{ letter: 'b', offset: 20 }`
  * once it is done it should emit an "end" event
  * **START WITH TESTS**
* TEST
  * create a new `LetterEmitter` `beforeEach` test
  * `it` splits a string and emits an event for each letter
    * use `on` to subscribe to letter events
    * count the number of times the `on` callback is called
      * BONUS/HINT: use `jest.fn()`
    * use `once` to subscribe to the end event
      * what's the difference between `on` and `once`?
      * `once` the end event fires call `done`
        * Give these three a try:
          * `letterEmitter.once('end', () => console.log('done!'))`
          * `letterEmitter.once('end', () => done())`
          * `letterEmitter.once('end', done)`
          * What happens?
          * What's the difference?
    * invoke the `letterEmitter.read` method
* BONUS
  * take an array of letters in the `LetterEmitter` constructor
  * fire a unique event every time a letter in the array passed to the constructor is seen
    * e.g.
```js
  const letterEmitter = new LetterEmitter(['a', 'b']);
  letterEmitter.on('a', () => console.log('a found'));
  letterEmitter.on('b', () => console.log('b found'));
  letterEmitter.on('letter', () => console.log('maybe a. maybe b. maybe something else'));
```
