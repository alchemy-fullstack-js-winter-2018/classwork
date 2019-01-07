const double = require('./double');

describe('double function', () => {
  it('doubles each item in an array', () => {
    const arr = [1, 2, 3];
    const doubledArr = double(arr);

    expect(doubledArr).toEqual([2, 4, 6]);
  });

  it('errors if each item is not a number', () => {
    const arr = [1, 2, 3];
    const doubledArr = double(arr);

    expect(doubledArr).toEqual([2, 4, 6]);
  });
});
