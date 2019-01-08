const {
  AnimalConstructor,
  AnimalFactory,
  AnimalClass
} = require('./animal');

describe('animal creators', () => {
  describe('AnimalConstructor', () => {
    it('has a speak method', () => {
      const animal = new AnimalConstructor('fluffy', 'cat');
      expect(animal.speak()).toEqual('My name is fluffy and I am a cat');
    });
  });

  describe('AnimalFactory', () => {
    it('has a speak method', () => {
      const animal = AnimalFactory('fluffy', 'cat');
      expect(animal.speak()).toEqual('My name is fluffy and I am a cat');
    });
  });

  describe('AnimalClass', () => {
    it('has a speak method', () => {
      const animal = new AnimalClass('fluffy', 'cat');
      expect(animal.speak()).toEqual('My name is fluffy and I am a cat');
    });
  });

  it('implements all three creators the same', () => {
    const animalConstructor = new AnimalConstructor('fluffy', 'cat');
    const animalFactory = AnimalFactory('fluffy', 'cat');
    const animalClass = new AnimalClass('fluffy', 'cat');

    expect(animalConstructor.speak()).toEqual(animalFactory.speak());
    expect(animalFactory.speak()).toEqual(animalClass.speak());
  });
});
