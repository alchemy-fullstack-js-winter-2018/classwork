// [1, 2, 3, 4].map(() => {

// });

// Promise.resolve('hi')
//   .then(fullfiledValue => {

//   })

// function add(a) {
//   let lastResult = null;
//   return function(b) {
//     console.log('before', lastResult);
//     lastResult = a + b;
//     console.log('after', lastResult);
//     return lastResult;
//   };
// }

// const add2 = add(2);

// console.log(add2(3));
// console.log(add2(4));
// console.log(add2(7));

function counter() {
  let count = 0;
  return function() {
    return ++count;
  };
}

function add(a, b, c) {
  return a + b + c;
}

function partialAdd(a, b) {
  return function(c) {
    return add(a, b, c);
  };
}

function curryAdd(a) {
  return function(b) {
    return function(c) {
      return add(a, b, c);
    };
  };
}

// create multiply with 5 parameters
function multiply(...args) {
  return args.reduce((acc, num) => acc * num);
}
// create curryMultiply
function curryMultiply(a) {
  return function(b) {
    return function(c) {
      return function(d) {
        return function(e) {
          return multiply(a, b, c, d, e);
        };
      };
    };
  };
}

function memo(fn) {
  let lastArgs = null;
  // my cache
  return function() {
    const args = [...arguments];
    // if args and lastArgs are the same
    // lastArgs = [1, 2]
    // args = [1, 2]
    // arg = 1 and i = 0 -> args[0] = 1 arg === args[0] is true
    // arg = 2 and i = 1 -> args[1] = 2 arg === args[1] is true
    if(lastArgs && lastArgs.every((arg, i) => arg === args[i])) {
      console.log('from lastResult');
      // return lastResult
      return lastResult;
    }
    console.log('invoke again');


    // otherwise
    // store lastArgs
    lastArgs = args;
    // invoke fn and store lastResult
    // fn.apply(null, args);
    lastResult = fn(...args);
    // return result
    return lastResult;
  };
}

function expensiveOperation(seconds) {
  return new Promise(resolve => {
    setTimeout(resolve.bind(null, seconds), seconds);
    // setTimeout(() => resolve(seconds), seconds);
  });
}

const memoExpensive = memo(expensiveOperation);

memoExpensive(1000)
  .then(memoExpensive.bind(null, 1000))
  .then(memoExpensive.bind(null, 1000))
  .then(memoExpensive.bind(null, 1000))
  .then(memoExpensive.bind(null, 1000))
  .then(memoExpensive.bind(null, 1000))
  .then(memoExpensive.bind(null, 1000))
  .then(memoExpensive.bind(null, 1000))
  .then(memoExpensive.bind(null, 1000))
  .then(memoExpensive.bind(null, 1000))
  .then(memoExpensive.bind(null, 1000))
  .then(memoExpensive.bind(null, 1000))
  .then(memoExpensive.bind(null, 1000))
  .then(memoExpensive.bind(null, 1000))
  .then(memoExpensive.bind(null, 1000))
  .then(memoExpensive.bind(null, 1000))
  .then(memoExpensive.bind(null, 5000));



module.exports = {
  add,
  curryAdd,
  counter,
  partialAdd,
  curryMultiply,
  memo
};
