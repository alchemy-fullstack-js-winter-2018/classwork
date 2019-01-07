const triple = require('./triple');


describe('triple function', () => {
  it('triple the number 4', () => {
    expect(triple(4)).toEqual(12);
  });

  it('triples the number 5', () => {
    expect(triple(5)).toEqual(15);
  });
});
