const power = require('./power');

describe('power function', () => {
  it('2 to the power of 2', () => {
    expect(power(2, 2)).toEqual(4);
  });

  test('3 to the power of 2', () => {
    expect(power(3, 2)).toEqual(9);
  });

  test('3 to the power of 3', () => {
    expect(power(3, 3)).toEqual(27);
  });
})
