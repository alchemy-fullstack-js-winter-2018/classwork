const promiseCheck = require('./promiseCheck');
const fsPromises = require('fs').promises;


describe('promiseCheck', () => {
  it('returns true if it is a promise', () => {
    expect(promiseCheck(fsPromises.readFile('./http.md'))).toBeTruthy();
  });

  it('returns false if it is not a promise', () => {
    expect(promiseCheck({})).toBeFalsy();
  });
});
