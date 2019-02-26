# React Practice

## Components

* `App.js`
  * Container component
* `AddDogForm.js`
  * Container component
  * from that takes dog name, age, and weight
  * onSubmit add dog to dogs list
* `Dogs.js`
  * Presentational/Functional component
  * Display a list of dogs
* `Dog.js`
  * Presentational/Functional component
  * Display a dog's name, age, and weight


## Tests

Snapshot test all components with enzyme. Use `toMatchSnapshot()`
to create a snapshot.

Enzyme test your AddDogForm. Simulate a submit and make sure the proper values
are passed.
