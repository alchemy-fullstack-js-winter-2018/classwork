const fs = require('fs');
const copy = require('./copy');

describe('copy function', () => {
  afterEach(() => {
    // clean up copied file
  });

  it('test copied file', done => {
    copy('./writing.txt', './writing-copy.txt', err => {
      // test our copy function doesn't error
      expect(err).toBeFalsy();


      fs.readFile('./writing-copy.txt', { encoding: 'utf8' }, (err, data) => {
        // test that the read file does not error (the file exists)
        expect(err).toBeFalsy();
        expect(data).toEqual('I am written\n');
        done();
      });
    });
  });
});
