const LetterEmitter = require('./LetterEmitter');

describe('LetterEmitter', () => {
  let letterEmitter = null;
  beforeEach(() => {
    letterEmitter = new LetterEmitter();
  });

  it('splits a string and emits an event for each letter', done => {
    let countFn = jest.fn();
    const str = 'hello';

    letterEmitter.on('letter', countFn);

    letterEmitter.on('end', () => {
      expect(countFn).toHaveBeenCalledTimes(str.length);
      done();
    });

    letterEmitter.read(str);
  });
});
