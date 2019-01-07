const {
  powerDeclared,
  powerExpressed,
  powerArrow
} = require('./power');

describe('power function', () => {
  it('can raise the number 2 to the power of 2', () => {
    expect(powerDeclared(2, 2)).toEqual(4);
  });

  it('can raise 3 to the power of 4', () => {
    expect(powerExpressed(3, 4)).toEqual(81);
  });
});
