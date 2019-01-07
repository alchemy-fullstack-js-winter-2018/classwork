const double = require('./double');

describe('double function', () => {
  it('double the number 50', () => {
    expect(double(50)).toEqual(100);
  });
});
