# Buffer

## Create a buffer

* create an `buffer.js` file
* import the buffer class `const Buffer = require('buffer').Buffer`
  * Alternatively: `const { Buffer } = require('buffer')`
  * why?
* Use `Buffer.alloc` to create an empty buffer of length 10
  * How could you "fill" this buffer?


## Create a buffer with a string inside

* Use `Buffer.from` to create a buffer from a string
* `console.log` your buffer
* try:
  * `console.log` your buffer but call `toString()` on it first
  * use `map` to iterate over your buffer and change each item to 104
    * console.log the result
    * console.log the `toString()` result
    * what if you use a value other than 104?
  * create another buffer `const smile = Buffer.from([0xF0, 0x9F, 0x98, 0x81]);`
    * console.log the result
    * console.log the `toString()` result
    * what else can you print?
    * how can you write this in decimal?
    * how can you write this in binary?
