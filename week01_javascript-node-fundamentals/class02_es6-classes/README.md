# ES6 Classes

## Readings and Resources

* [MDN - Array Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
* [MDN - this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
* [MDN - Working with Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)

## Agenda

* Lab review
  * `map`
  * `reduce`
  * `forEach`
* Array Methods
  * `find`
  * `splice`
  * `flat`
  * `flatMap`
  * `join`
  * `split`
  * `concat`
* `this`: JavaScript object context
* JavaScript Object creation
  * Object literal
  * Constructor function
  * Factory function
  * class
  * EXERCISE: animal object
* ES6 Classes
  * constructor
  * static vs instance methods
  * extending classes
  * DEMO: CoolStringifier
  * EXERCISE: cat class
* JavaScript Errors
  * messaging
  * built in errors
  * DEMO: Bug class
  * try/catch
  * DEMO: parseInt

## JavaScript Objects

From MDN:

> JavaScript is designed on a simple object-based
> paradigm. An object is a collection of properties,
> and a property is an association between a name
> (or key) and a value. A property's value can be a
> function, in which case the property is known as a
> method. In addition to objects that are predefined
> in the browser, you can define your own objects.
> This chapter describes how to use objects,
> properties, functions, and methods, and how to
> create your own objects.

This collection of properties and methods can model
real-world objects.-

### `this`

In the context of a JavaScript object, `this` refers
to the object itself. When dealing with object
creators (constructor function, factory functions,
and classes) `this` refers to an instance of an
object (e.g. a particular person).

### Object literal

Object literals are useful for creating one time use
objects. Object literals are created by putting
properties and methods between a set of curly braces.

```js
const person = {
  name: 'William James',
  phone: '503-555-5555',
  age: 177,
  sayHi() {
    console.log(`Hi, I'm ${this.name}`);
  }
};
```

### Constructor functions

Constructor functions are useful when we want to have
many objects that all have some properties in common.

```js
const Person = function(name, phone, age) {
  this.name = name;
  this.phone = phone;
  this.age = age;
};

Person.prototype.sayHi = function() {
  console.log(`Hi, I'm ${this.name}`);
};

const williamJames = new Person('William James',
  '503-555-5555',
  177);
```

### Factory functions

Similar to constructor functions, factory functions
are useful when we want to have many objects that
all have some properties in common.

```js
const Person = function(name, phone, age) {
  return {
    name,
    phone,
    age,
    sayHi() {
      console.log(`Hi, I'm ${this.name}`);
    }
  };
};

const williamJames = Person('William James',
  '503-555-5555',
  177);
```

### Class

As of ES6 JavaScript has a `class` keyword that
allows developers to create objects similar to
constructor functions, but with a more familiar
syntax (from other programming languages).

```js
class Person {
  constructor(name, phone, age) {
    this.name = name;
    this.phone = phone;
    this.age = age;
  }

  sayHi() {
    console.log(`Hi, I'm ${this.name}`);
  }
}

const williamJames = new Person('William James',
  '503-555-5555',
  177);
```

## Errors

Error messages are super important tools for debugging broken code. Javascript has many built in error messages, but you can also define your own errors in your programs. It is important to not forget that errors will happen in production. Error logs are kept in order to fix bugs in productions. Writing good error messages is critical for finding and fixing bugs in deployed applications.

## Writing Good Error Messages

A great error message should have the following features
* a timestamp so that a timeline of the error can be made
* a message about the problem that occurred
* a message about the cause of the problem
* a consistent format (so that it can be parsed and searched)
* a severity level (low, med high) or (0 - 10)

``` javascript
// creating a smart error
class Bug extends Error {
  constructor({problem, cause, level=0, timestamp=new Date().toISOString()}){
    super(`__ERROR__ ${problem}: ${cause} (LEVEL ${level}) (TIMESTAMP ${timestamp})`)
    this.problem = problem
    this.cause = cause
    this.level = level
    this.timestamp = timestamp
  }
}

let error = new Bug({problem: 'cannot create user', cause: 'requires password'})
```

## Handling Thrown Errors

Javascript functions can throw errors. Throwing an `Error` is a great way to force developers to use a function correctly. Un-handled errors will often crash Javascript and stop program execution. This is referred to as *failing fast*. The idea is that the sooner the code fails, the sooner a developer will find bugs and fix them. Though throwing errors is a useful feature of the language itself, programs like servers need a way to continue running in spite of bugs in the code. Javascript has a `try {} catch (error) {}` syntax for handling this.

``` javascript
let userInput = '{'
try {
 let data = JSON.parse(userInput)
 // do something with data
} catch(e) {
  console.error(e)
}
```

## Error Cheat Sheet

| Type |  Reason |
| --- | --- |
| Error | generic error |
| ReferenceError | an attempt was made to access a variable that is not defined |
| SyntaxError | the javascript is not valid |
| TypeError | a provided argument was no the allowable type |
| SystemError | a NodeJS error that occurs when a system error has occurred |

## System Error Cheat Sheet

* `EACCESS` - an attempt to access a file without the right permissions
* `EADDRINUSE` - an attempt to start a server on a PORT that is already in use
* `ECONNREFUSED` - a connection was deliberately refused by the target machine
* `ECONNRESET` - a connection was forcibly closed by a peer
* `EEXIST` - a file exists and the attempted action required that it didn't
* `EISDIR` - an action expected to act on a file but found a directory
* `EMFILE` - too many files were open for your operating system to handle
* `ENOENT` - an action expected a file, but did not find one
* `ENOTDIR` - an action expected a directory, but found something else
* `ENOTEMPTY` - an action expected an empty directory, but found one with data in it
* `EPERM` - an attempt to do something that you currently don't have permissions to do
* `EPIPE` - an attempt to write data to a connection that had been closed
