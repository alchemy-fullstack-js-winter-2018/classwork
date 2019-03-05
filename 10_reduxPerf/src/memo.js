export function defaultEquality(prevArguments, nextArguments) {
  return prevArguments.length === nextArguments.length &&
    prevArguments.every((arg, i) => {
      return arg === nextArguments[i];
    });
}

export function memoize(fn, equalityFn = defaultEquality) {
  let lastArguments = null;
  let lastResult = null;

  // memo(['apple', 'banana'], 2, 3, 4, 5);
  return function(...currentArguments) {
    // currentArguments = [['apple',], 2, 3, 4, 5]
    // const currentArguments = [...arguments];
    if(lastArguments && equalityFn(lastArguments, currentArguments)) {
      return lastResult;
    }

    lastArguments = currentArguments;
    // fn(1, 2, 3, 4, 5);
    lastResult = fn(...currentArguments);

    return lastResult;
  };
}
