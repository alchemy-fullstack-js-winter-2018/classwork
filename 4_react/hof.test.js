const {
  add,
  curryAdd,
  counter,
  partialAdd,
  curryMultiply
} = require('./hof');

describe('counter', () => {
  it('counts the number of times it is called', () => {
    const count = counter();
    // let count = 0
    const count2 = counter();
    // let count = 0

    expect(count()).toEqual(1);
    expect(count()).toEqual(2);
    expect(count()).toEqual(3);
    expect(count()).toEqual(4);
    expect(count2()).toEqual(1);
  });

  it('partially applies add', () => {
    const addPart = partialAdd(2, 3);
    const add4 = partialAdd(2, 2);

    expect(addPart(0)).toEqual(5);
    expect(add4(2)).toEqual(6);
  });

  it('curries a multiply function', () => {
    expect(curryMultiply(2)(2)(3)(4)(1))
      .toEqual(48);
  });
});
