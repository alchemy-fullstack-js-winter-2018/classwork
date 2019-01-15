const toSentenceWithoutY = require('./quiz');

describe('quiz from today', () => {
  it('removes ys and makes a question', () => {
    const arr = ['hot', 'sky', 'green', 'Yeti'];
    expect(toSentenceWithoutY(arr)).toEqual(['Is it hot?', 'Is it green?']);
  });
});
