# Promise Review

## Readings

* [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

## Agenda

* Promises
  * states
  * instance methods
    * `then`
    * `catch`
    * `finally`
  * static methods
    * `all`
    * `race`
    * `resolve`
    * `reject`
* data helper
* Aggregations

## Promises

A promise (or a thenable) is a way to handle asynchronous actions. It is a
promise to do some action or send some data at some future time.

Other languages may use the word future, delay, or deferred for concepts similar
to JavaScript promises.

### States

* `pending` - initial state of a promise
* `fulfilled` - promise successfully resolved
* `rejected` - promise completed with failure

### Instance methods

All three instance methods return a promise. This allows them to be chained.

* `then` - takes a callback that will get invoked on a fulfilled promise
* `catch` - takes a callback that will get invoked on a rejected promise
* `finally` - takes a callback that will get invoked when a promise finishes

#### then

The `then` method has two parameters: `onFulfilled` and `onRejected`.
In practice , usually only the `onFulfilled` callback is passed to the
`then` method.

The `onFulfilled` callback has one parameter, a fulfilled value.

```js
promise
  .then(fulfilledValue => console.log(fulfilledValue));
```

Multiple `then`s can be chained together, and each then is executed in order.
If the `onFulfilled` callback returns a value, that value will be passed to the
next `then` in the chain. If the `onFulfilled` callback returns a promise,
the next `then` will wait for the promise to fulfill and receive that promise's
fulfilled value.

```js
promise
  .then(fulfilledValue => {
    return 'hi
  })
  .then(value => console.log(value));
  // -> 'hi'
```

#### catch

The `catch` method is invoked when a promise fails and is rejected. It has one
parameter, a `onRejected` callback. The `onRejected` callback has one parameter,
a `reason` for rejection.

```js
promise
  .then(fulfilledValue => 'hi')
  .catch(reason => console.error(reason));
```

Like `then` `catch` can be chained. However, each `catch` in the chain must
`throw` for the next `catch` in the chain to invoke its `onRejected` callback.

```js
promise
  .then(fulfilledValue => 'hi')
  .catch(reason => {
    throw 'next catch'
  })
  .catch(reason => {
    console.error(reason)
  })
  // -> next catch
  ```

#### finally

The `finally` method takes a callback that will be invoked whether the promise
is fulfilled or rejected.

### Static Methods

* `Promise.all`
* `Promise.race`
* `Promise.resolve`
* `Promise.reject`

#### Promise.all

`Promise.all` takes an array of promises. It returns a promise that fulfills
when each promise in the array fulfills. It rejects if any promise in the array
rejects.

If all promises fulfill, `then` the `onFulfilled` callback is passed an array
where each item is a fulfilled value from the fulfilled promises passed to
`Promise.all` in order.

```js
Promise.all([
  promise1,
  promise2,
  promise3
])
  .then(fulfilledValues => {
    // fulfilledValues[0] is the fulfilled value from promise1
    // fulfilledValues[1] is the fulfilled value from promise2
    // fulfilledValues[2] is the fulfilled value from promise3
  })
```

```js
Promise.all([
  promise1,
  promise2,
  promise3
])
  .then(([fulfilled1, fulfilled2, fulfilled3]) => {
    // ....
  })
```

#### Promise.race

`Promise.race` takes an array of promises. It fulfills or rejects as soon as a
single promise in that array fulfills or rejects.

#### Promise.resolve

`Promise.resolve` has one parameter and returns a promise that fulfills with
the argument passed to it.

```js
Promise.resolve('hi')
  .then(fulfilledValue => console.log(fulfilledValue))
  // -> 'hi'
```

#### Promise.reject

`Promise.reject` has one parameter and returns a promise that rejects with
the argument passed to it.

```js
Promise.reject('hi')
  .catch(fulfilledValue => console.log(fulfilledValue))
  // -> 'hi'
```
