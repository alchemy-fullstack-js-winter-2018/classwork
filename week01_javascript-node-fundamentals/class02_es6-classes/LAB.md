# In memory database

## Description

Implement an in-memory database that can be used to
store information as long as your program is running.

The database should be a class `MemoryDatabase` with
a `store` property (i.e. `this.store`) initialized
as an empty object.

```js
class MemoryDatabase {
  constructor() {
    this.store = {}
  }
}
```

There should be relevant CRUD methods created to use
the database. These methods are detailed below.

This is a solo assignment. Try and do these from
scratch.

**You must use TDD and good commits for this lab**

## Methods to Implement

### 1. `create(<objectToSave>)`

* create a unique identifier (id) for the object
  (Use a third-party npm module like `shortid` or
  `uuid)
* create a copy of the original object (use the
  spread operator) and put the created id in the
  copy under an `_id` property (e.g.
  `{ ...objectToSave, _id: createdId }`)
* put the copied object in the store so that the key
  is the id and the value is the copied object
* return the copied object

### findById(<id>)

* return the object from `this.store` where the key
  is `id`
* throw an error if no object exists for the id

### find()

* return a list of all objects in `this.store`.
  (NOTE: use [`Object.values`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values))

### findByIdAndUpdate(<id>, <newObject>)

* create a copy of the `newObject` similar to the
  create method above (make sure to put the id into
  the object)
* replace the old object with the new copied object
  in `this.store`
* return the new copied object
* throw an error if no object exists for the id

### findByIdAndDelete(<id>)

* delete the value under `id` in `this.store` (use
  the [`delete` operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete))
* return `{ deleted: 1 }`
* throw an error if no object exists for the id

### drop

* delete all keys in `this.store` (NOTE: you can
  replace the current `this.store` with an empty
  object)

## Process

Use TDD to drive the implementation.

Make sure to start with clean state. Initially, use
`beforeEach` to instantiate your `MemoryDatabase`.
Eventually you can instantiate your `MemoryDatabase`
at the top of your `describe` block and use
`db.drop()` inside the `beforeEach` to reset your
state

Here are suggested tests (in order):

1. Pass an object to the `.create` method and assert
  that the saved object has an _id property.
1. Pass an object to the `.create`. Use the returned
  _id to `.findById` the object and test that the
  "found" object is semantically the same as
  original object.
1. Pass a bad id to `.findById` and assert that it
  throws an error
3. Save an object, then pass its _id to
  `.findByIdAndDelete` and check that
  `{ deleted: 1 }` is returned.
  Pass the _id to `.findById` and assert that an
  error is thrown
4. Pass a bad id to `.findByIdAndDelete` and assert
  that `{ deleted: 1 }` is returned.
5. For a newly create store, test that `.find`
  returns an empty array `[]`.
6. Save a few objects, then test that `.find`
  returns an array of those objects.
