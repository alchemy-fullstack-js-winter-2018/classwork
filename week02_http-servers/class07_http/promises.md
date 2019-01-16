# Promises

## Read a file

* require `const fsPromises = require('fs').promises;`
* use `fsPromises.readFile` to read a file
* `then` `console.log` the file















## Write a file

* require `const fsPromises = require('fs').promises;`
* use `fsPromises.writeFile` to write a file
* `then` `console.log` "DONE!"

## Copy a file

* require `const fsPromises = require('fs').promises;`
* use `fsPromises.readFile` to read a file
* `then` use `fsPromises.writeFile` to write the read data
* `then` `console.log` "DONE!"

## Copy a file

* create and export a `copy(src, dst)` function
  * require `const fsPromises = require('fs').promises;`
  * use `fsPromises.readFile` to read a file
  * `then` use `fsPromises.writeFile` to write the read data
  * return the promise
* test
  * test your copy function
  * NOTE: you don't need to use `done()`. if your test returns a promise
    jest will wait for the promise to resolve
  * invoke your copy function
  * `then` expect that the new file exists

## Transformer

* create and export a `transform(src)` function
  * require `const fsPromises = require('fs').promises;`
  * use `fsPromises.readFile` to read a file
  * `then` remove all capital letters
  * `then` make all letters capital
  * `then` reverse the string
* test
  * invoke your transform function
  * `then` expect that the result is what you think it should be

## Is it a promise

* write a `promiseCheck.js` and `promiseCheck.test.js`
* test
  * pass a promise to `promiseCheck` and
    expect it to return true
  * pass a non-promise to `promiseCheck` and
    expect it to return false
* `promiseCheck(toCheck)` is a function that
  returns `true` if toCheck is a promise.

## Create a promise

* require `const fs = require('fs')`
  * NOT THE PROMISE fs
* create a readPromise function
  * use `new Promise((resolve, reject) => {})` to create a new promise
  * use `fs.readFile` to read a file
  * resolve with the data from the file
  * reject with the error from reading the file

## Superagent

* use `superagent` to make a `get` request to https://rickandmortyapi.com/api/character/
* use `then` to wait for the request to resolve and print the output

## Promise.all

* use `superagent` to make a `get` request to https://rickandmortyapi.com/api/character/
* use `then` to wait for the request to resolve and print the output
* make another `get` request to retreive that origin of each character
  * HINT: use `Promise.all`

## write a service

* write a `rickAndMortyApi.js` and `rickAndMortyApi.test.js` file
* export a function `getCharacter` that takes an id and returns a promise that resolves to a character
  * return only the characters name, status, and species
* **WRITE YOUR TESTS FIRST**

## Mocks

* use `jest.mock` to mock your `rickAndMortyApi.js`
  * Use `Promise.resolve` to return a promise that resolves with some data

