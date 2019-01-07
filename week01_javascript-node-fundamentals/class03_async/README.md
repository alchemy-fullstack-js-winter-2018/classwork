# Asynchronous JavaScript

## Readings and Resources

* [Event Loop](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/)

## Agenda

* Lab Review
  * `create`
  * `find`
  * `drop`
* Node Event Loop
  * What is a thread?
    * instruction that the operating system (OS) can
      run
    * Allegory: thread with rings
  * What is a callback?
    * a function that gets invoked after in response
      to an event
    * Analogy: restaurant queue
  * Node is single threaded?!?
    * Call Stack
      * invoked functions
    * Callback Queue
      * callbacks waiting to be added to the stack
    * DEMO: event loop step
    * Drawbacks? (cpu intensive operations)
* Callbacks
  * Array methods
    * DEMO: `map`
  * asynchronous callbacks
    * functions that get called after something
      finishes
    * error first
    * DEMO: copy file
    * DEMO: copy directory
* Buffer
  * "raw" binary data in an array
  * when reading from a file we get a buffer
  * Demo: create buffer
  * Exercise: character changer

## Node Runtime (V8)

### The Call Stack

In Javascript, every synchronous function that is
called is pushed onto a stack in V8. The function on
top of the stack is always the function that is
currently executing. When the function that is
running returns it is "popped" off a stack. This
stack is referred to as a **Call Stack**. V8 has a
single Call Stack, therefor only one function can be
running at a time. The Call Stack is always printed
to the screen when an error is thrown, which helps
developers to trace where errors have occurred in
their code.

### The Callback Queue

When an asynchronous function called *"foo"* is
invoked, it is pushed onto the V8 **call stack**.
Then *"foo"* makes a call to a browser/NodeJS API
and passes on a callback. Then the *"foo"* function
returns and is popped off of the call stack, and V8
keeps on executing synchronous code. Meanwhile, the
external browser/NodeJS API is still running. Once
the external API has completed it's task, it will
pass any results into the callback and enqueue the
callback on V8's **callback queue**. Functions
stored on the callback queue are not executing, they
are only waiting to be put onto the call stack.

### The Event Loop

The event loop is in charge of dequeueing callbacks
from the V8 callback queue and pushing them on to
the call stack. It has one rule for doing this. It
will only push a callback on to the call stack if it
is empty.

#### When the call stack pops its last function
  * the event loop will check if any callbacks are
  in the callback queue
  * if it finds a callback it will dequeue it from
  the callback queue and push it onto the call stack

#### When both the call stack and callback queue are empty
  * the event loop will watch the callback queue for
  new callbacks
  * when a callback is included it will immediately
  be dequeued and pushed onto the call stack

## NodeJS Callback Pattern

NodeJS made the decision to have all asynchronous
events be handled using error first callbacks. The
main advantage of this is that all asynchronous
methods have a consistent interface. This means that
when you are working with asynchronous NodeJS code,
you can always assume how the callback is going to
be formatted, making your life as a developer much
easier!

Having a consistent callback interface has also made
it possible for libraries to be written that assist
Javascript developers in handling complex async code!

### Defining an Error First Callback

* a callback is simply a function that is passed as
  an argument to another function
* "error first" callbacks have the function
  signature `(err, result) => {}`
  * the first parameter is reserved for an error
    * the value will be `null` or `undefined` if
    there is no error
  * the second parameter is reserved for any
  successful response data
    * the value will be `null` or `undefined` if
    there is no data
    * not every NodeJS method passes data into the
    callback

## Buffer

Buffers are NodeJS built-in constructors for working
with binary data, also called raw data. Buffer is a
global constructor in NodeJs. When reading from the
filesystem, network, or elsewhere data is usually
presented to the developer in the form of a buffer.
Buffers are an array of bytes, with many useful
methods for reading and writing data. The data in
buffers can be decoded as integers, floating point
numbers, and strings.

 ```
   var data = Buffer.from('welcome to bufferville') // create a buffer using a string
   console.log(data) // looks like hex when console logged, but its a buffer not a string!!!!

   console.log(data.toString()) // prints the original string
   console.log(data.toString('hex')) // prints the strings data as hex digits
   console.log(data.toString('utf8', 0, 1)) // prints the character stored in the first byte
   console.log(data.readUInt8()) // prints the integer stored in the first byte
   console.log(data.readFloatLE()) // prints the floating point number stored in the first 4 bytes
 ```
