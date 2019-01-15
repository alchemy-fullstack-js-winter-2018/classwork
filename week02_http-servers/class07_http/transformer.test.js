const {
  transformer,
  removeCapitals
} = require('./transformer');

describe('transformer', () => {
  it('transforms some file', () => {
    return transformer('./transform.txt')
      .then(transTxt => {
        // -> Hi There
        // -> i here
        // -> I HERE
        // -> EREH I
        expect(transTxt).toEqual('EREH I');
      });
  });

  it('removes capital letters', () => {
    expect(removeCapitals('Hi There')).toEqual('i here');
  });
});
