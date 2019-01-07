const {
  addDeclared,
  addExpressed,
  addArrow
} = require('./add');

describe('add functions', () => {
  describe('addDeclared', () => {
    it('adds two number together', () => {
      expect(addDeclared(1, 6)).toEqual(7);
    });
  });

  describe('addExpressed', () => {
    it('adds two number together', () => {
      expect(addExpressed(1, 6)).toEqual(7);
    });
  });

  describe('addArrow', () => {
    it('adds two number together', () => {
      expect(addArrow(1, 6)).toEqual(7);
    });
  });

  it('returns the same value for addDeclared, addExpressed, addArrow', () => {
    const a = 1;
    const b = 7;

    const declaredResult = addDeclared(a, b);
    const expressedResult = addExpressed(a, b);
    const arrowResult = addArrow(a, b);

    expect(declaredResult).toEqual(expressedResult);
    expect(expressedResult).toEqual(arrowResult);
  });
});
