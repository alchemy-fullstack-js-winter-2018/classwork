function curryAdd(a) {
  return function(b) {
    return function(c) {
      return add(a, b, c);
    };
  };
}

const add5 = curryAdd(2)(3);

console.log(add5(4));
console.log(curryAdd(2)(3)(4));

function partialAddFirst(a, b) {
  return function(c) {
    return add(a, b, c);
  };
}

function partialAddLast(a) {
  return function(b, c) {
    return add(a, b, c);
  };
}

partialAddFirst(2, 3)(4);
partialAddLast(2)(3, 4);

const add2 = partialAddLast(2);

// built in way to do partialAddLast
const add3 = add.bind(null, 3);
console.log('bind add3', add3);
console.log('bind add', add3(4, 5));

function add(a, b, c) {
  return a + b + c;
}

// built in way to do partialAddFirsts
const add3And5 = add.bind(null, 3, 5);

console.log('add3And5', add3And5(6));

function counter() {
  let count = 0;
  return function() {
    count += 1;
    return count;
  };
}

const myCounter = counter();
console.log(myCounter());
console.log(myCounter());
console.log(myCounter());
console.log(myCounter());
console.log(myCounter());
console.log(myCounter());

// a^2 + o^2 = h^2
function hypo(a, o) {
  return function() {
    return Math.sqrt((a ** 2) + (o ** 2));
  };
}

const myHypo = hypo(3, 4);
console.log(myHypo());

function fetchPage(url, page) {
  return function() {
    fetch(`${url}?page=${page}`)
      .then(res => res.json());
  };
}

const fetchPage1 = fetchPage('https://rickandmorty.com/api/characters', 1);



<button onClick={fetchPage1}>Fetch Page One</button>
