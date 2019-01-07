# Array Methods

## Description

Implement a module with functions similar to array
operations that exist on the built-in JavaScript
array object.

This is a solo assignment. Try and do these from
scratch.

Relevant info for each array function is in details
below.

Implement select array functions from scratch. **Only
use**:
* `array.length` (read)
* `array.length = x` (assignment)
* `array[i]` (read)
* `array[i] = value` (assignment)

**You must use TDD and good commits for this lab**

The specs for the lab are less onerous than the
entire JavaScript specification for the
method (for example, no third `array` parameter and
`index` is a challenge goal).

The "callback signature" refers to the parameter
definition of the supplied callback function.

The instructions include how to handle array "holes".
This is for one of the bonus parts of the assignment.

## Functions to Implement

### 1. `map(arr, callback)`

Takes an `Array` and callback of signature `(item) => {}`
and creates a new `Array` with the return value of each
called callback.

Skips any holes in the `Array`, and mapped `Array` should
have hole in same spot. The mapped `Array` should have
the same `.length` value as the original `Array`.

Returns the "mapped" new array.

### 2. `filter(arr, callback)`

Takes an `Array` and callback of signature `(item) => {}`
and creates a new `Array` with all items whose callback
returned `true` or a truthy value.

Any holes in the `Array` should be skipped (don't call the callback function, it always "fails" predicate).

Returns the new `Array` of "filtered" items.

### 3. `findIndex(arr, callback)`

Takes an `Array` and callback of signature `(item) => {}`
and returns the index of the first item whose callback returns `true` or a truthy value.

Any holes in the `Array` should be skipped (don't call the callback function, it always "fails" predicate).

Returns the index of the found item, `-1` if no item is found.

### 4. `reduce(arr, callback [, initialValue])`

Takes an `Array` and callback of signature
`(accumulator, item) => {}` and an (optional) second
`initialValue` parameter that is the initial value of the
accumulator. After each function call, the return value is
passed as the accumulator argument of the next function call.

If the second `initialValue` parameter is not supplied, the
first function call should be the first item as the
`accumulator`, and the second array item as the `item`.

Any holes in the `Array` should be skipped (don't call the callback function).

Returns the final accumulator value.

### 5. `every(arr, callback)`

Takes an `Array` and callback of signature `(item) => {}`
and returns an overall `true` value if **all** callback
return `true` or a truthy value.

Any holes in the `Array` should be skipped (don't call the
callback function).

Returns the `true` if every item in the `Array` has returned `true`, otherwise `false`.

## Rubric **10pts**
* Each test: *1pt* (x 5 = 5pts)
* Each function: *1pt* (x 5 = 5pts)

## Challange

### `forEach(arr, callback)`

Takes an `Array` and callback of signature
`(item, index) => {}` and calls that function for each item
in the `Array`.

HINT: To test `forEach`, you'll need to use a closure variable to "store" the calls to the callback function.

Any holes in the `Array` should be skipped (don't call the callback function).

Returns `undefined`.

### Test indexes

All of these methods can supply the current index as the second (or third in the case of `reduce`) callback function parameter. Test and implement this functionality.

Since all of these methods (except reduce) have virtually the same implementation for testing whether the callback function was called with the correct index. Can you create a single function in your test file that
all of the index tests (except reduce) call to test index functionality?

### Array Holes

This part of the lab is optional, but recommended if you want to push yourself. Do this part incrementally
_after you have completed_ the primary requirements.

An array hole is a "not defined" index property on an array. For example, `const arr = [1,,3]`
will have a "hole" meaning there is no index 1 defined for that array.
This is different than `const arr = [1, undefined, 3]` because the array _will_ have an index 1 defined for
the array, but it's value will be `undefined`.

You can best understand this by looking at the `console` output for the following arrays,
one with holes, and one with the value `undefined` in each element of the array:

![image](https://cloud.githubusercontent.com/assets/478864/26217500/7e1a2c96-3bbc-11e7-9afb-0a5f51cb68c7.png)

The only way to check for a hole is to use `.hasOwnProperty(property)`:

![image](https://cloud.githubusercontent.com/assets/478864/26217549/a467d920-3bbc-11e7-9fb6-af2bcd470a52.png)
