const fluffy = {
  name: 'fluffy',
  speak() {
    console.log(`Meow, my name is ${this.name}`);
  }
};

const whiskers = {
  name: 'whiskers',
  speak() {
    console.log(`Meow, my name is ${this.name}`);
  }
};

fluffy.speak();
// -> Meow, my name is fluffy
whiskers.speak();
