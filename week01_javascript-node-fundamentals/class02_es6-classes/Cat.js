const { AnimalClass } = require('./animal');

class Cat extends AnimalClass {
  constructor(name) {
    super(name, 'cat');
  }

  static typeOfSpecies() {
    return 'cat';
  }

  static description() {
    return 'All Cat\'s have legs';
  }

  // Overriding a method
  speak() {
    return `Meow, I am ${this.name}`;
  }
}

module.exports = Cat;
