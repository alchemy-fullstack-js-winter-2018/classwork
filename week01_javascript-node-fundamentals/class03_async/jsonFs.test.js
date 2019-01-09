const fs = require('fs');
const {
  readJSON,
  writeJSON
} = require('./jsonFs');

describe('jsonFs', () => {
  describe('readJSON', () => {
    it('reads a JSON file from disk', done => {
      // Create an object const obj = { name: 'Ryan' };
      const obj = { name: 'Ryan' };

      // stringify object with JSON.stringify(obj)
      const objString = JSON.stringify(obj);

      // write object string to file system with fs.writeFile
      fs.writeFile('./testData/test', objString, err => {
        expect(err).toBeFalsy();
        // invoke readJSON(pathToFile, (err, data) => {})
        readJSON('./testData/test', (err, data) => {
          // test that readJSON read the right thing
          expect(err).toBeFalsy();
          expect(data).toEqual(obj);
          done();
        });
      });
    });
  });

  describe('writeJSON', () => {
    it('writes JSON to disk', done => {
      // create an object to save const obj = { name: 'ryan' }
      const obj = { name: 'ryan' };

      // invoke writeJSON(pathToFile, obj, err => {})
      writeJSON('./testData/testWrite', obj, err => {
        expect(err).toBeFalsy();
        // inside callback use readJSON to verify write
        readJSON('./testData/testWrite', (err, data) => {
          expect(err).toBeFalsy();
          expect(data).toEqual(obj);
          done();
          // call done
        });

      });
    });
  })
});
