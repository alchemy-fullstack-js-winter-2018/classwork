// higher order functions

function threeAndTwo(fn) {
  return fn(3, 2);
}

function add(a, b) {
  return a + b;
}

function power(a, b) {
  return a ** b;
}

console.log(threeAndTwo(power));

function double(a) {
  return a * 2;
}

const doubledNumbers = [1, 2, 3].map((elementInArray, indexOfElement) => {
  console.log(elementInArray, indexOfElement);
  return elementInArray * 2;
});

console.log(doubledNumbers);

const evens = [1, 2, 3, 4, 5, 6, 7, 8, 9].filter(elementInArray => {
  return elementInArray % 2 === 0;
});

console.log(evens);
