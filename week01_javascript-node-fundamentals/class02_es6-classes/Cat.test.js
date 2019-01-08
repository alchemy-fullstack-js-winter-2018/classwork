const Cat = require('./Cat');

describe('Cat', () => {
  it('can speak', () => {
    const fluffy = new Cat('fluffy');
    expect(fluffy.speak()).toEqual('Meow, I am fluffy');
  });

  it('has a typeOfSpecies static method', () => {
    expect(Cat.typeOfSpecies()).toEqual('cat');
  });

  it('has a description static method', () => {
    expect(Cat.description()).toEqual('All Cat\'s have legs');
  });
});
