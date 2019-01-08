// factory function
const createCat = name => ({
  //name: name,
  name,
  speak() {
    console.log(`Meow, my name is ${this.name}`);
  }
});


// Constructor function
function Cat(name) {
  this.name = name;
}

Cat.prototype.speak = function() {
  console.log(`Meow my name is ${this.name}`);
};

// classes (ES6)
class CatClass {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`Meow my name is ${this.name}`);
  }
}

const fluffy = createCat('fulffy');
const whiskers = createCat('whiskers');

fluffy.speak();
whiskers.speak();

const bingo = new Cat('bingo');
bingo.speak();

const myCatFelix = new CatClass('felix');
