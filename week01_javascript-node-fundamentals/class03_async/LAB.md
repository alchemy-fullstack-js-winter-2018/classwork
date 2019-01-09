Simple Database
===

Build a simple object database that stores and retrieves objects from the file system.

Standard repository/dev stuff: `README.md`, `package.json`, `.gitignore`, `.eslintrc`, `.travis.yml`, tests, meaningful commits, named npm scripts, etc.

Make sure your `README.md` describes your store API.

**Solo assignment**

## Doc/Resources
* [Node fs docs](https://nodejs.org/api/fs.html) - specifically the methods `readdir`, `readFile`, `writeFile`, and `unlink`
* [Node path docs](https://nodejs.org/api/path.html) - specifically the methods `join` and possibly `resolve`
* JSON [stringify](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)
and [parse](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)
* Checkout `mkdirp` and `rimraf` on npm!

## Description:

Your library will have:

1. A `Store` class that takes a name of a directory to use and then stores and retrieves
objects by writing and reading them to files in the directory.

Here is an example of how your module would be imported (required) and used:

```js

const Store = require('../lib/store');
const rootDirectory = path.join(__dirname, 'animals');
const store = new Store(rootDirectory);

store.create({ name: 'garfield' }, (err, animal) => {
    if(err) {
        console.error('could not save animal')
    } else {
        store.findById(animal._id, (err, cat) => {
            if(err) {
                console.error('could not get cat')
            } else {
                console.log('got cat', cat);
            }
        });
    }
});
```

Here is an example of how the directories and files would be structured:

```
+--+ animals
   |
   +---* 34fdr5.json
   |
   +---* 65rej5.json
   |
   +---* 93odb2.json
```

## Process

Use TDD to drive the implementation.

The setup for the tests will require that you **start with a "clean" file directory**.
This is where `rimraf` and `mkdirp` will come in handy.

Your tests will need to handle asynchronous calls.

### `Store`

* A Class with a constructor that takes its root directory it should save and read files to and from.
* The directory should already exist!
* The class has the following methods:

1. `.create(objectToSave, callback(error, objectThatSaved))`
    * Creates a `_id` property for the object (Use third-party npm module like `shortid` or `uuid` or ?)
    * Saves the object to a file (`JSON.stringify`), where the filename is the `_id`. For example, if the id is 3k4e66, the file will be `3k4e66.json`
    * takes a callback which takes an error and the deserialized (`JSON.parse`) saved object
1. `.findById(_id, callback(error, objectFromFile))`
    * Takes a callback which takes an error and the deserialized (`JSON.parse`) object that has
      that id
    * If an object with that id does not exists, objectFromFile is `null`
1. `.findByIdAndDelete(_id, callback(error, removedSuccessObject))`
    * The store should removes the file of the object with that id.
    * Takes a callback that takes an error and an object `{ deleted: 1 }` if object was removed,
    or `{ deleted: 0 }` if the id did not exist (HINT: catch `ENOENT` error)
1. `.find(callback(error, arrayOfObjects))`
    * Takes a callback that takes an error and an array of all objects in the directory. (hint:
    can you use the store's `findById(id)` method as part of this?), or resolves to an empty
    array `[]` when no objects in the directory.
1. STRETCH GOAL: `.findByIdAndUpdate(_id, objectToUpdate, callback(error, updatedObject))`
    * Write the new object to file, replacing existing object
    * Takes a callback which takes an error and the deserialized (`JSON.parse`) updated object

TDD the above methods on the `Store` class. Test that the objects are handled correctly by using the API methods, but do **not** test that the files were written to the directory

### Tests

For the setup, make sure the directory to pass to the store has been removed and then recreated _for each test_

Here are suggested tests (in order):

1. Pass an object to the `.create` method and assert that the saved object has an _id property.
  Use that _id to `.findById` the object and test that "found" object is semantically the same
  as original object.
2. Pass a bad id to `.findById` and assert that `null` is returned for the callback.
3. Save an object, then pass its _id to `.findByIdAndDelete` and check that `{ deleted: 1 }`
  is returned for the callback. Pass the _id to `.findById` and assert that `null` is returned.
4. Pass a bad id to `.findByIdAndDelete` and assert that `{ deleted: 0 }` is returned
  for the callback.
5. For a newly create store, test that `.find` returns an empty array `[]` for the callback.
6. Save a few objects, then test that `.find` returns an array of those objects.

## Rubric:

* Tests: 3pts
* Async Coding: 3pts
* Functional Correct Behavior: 2pts
* Project (Module) Organization: 2pts
