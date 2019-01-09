const fs = require('fs');
const shortid = require('shortid');

class Store {
  constructor(rootDir) {
    this.rootDir = rootDir;
  }

  create(obj, callback) {
    // create _id and put it into obj
    const _id = shortid.generate();
    const objWithId = { ...obj, _id };
    // JSON.stringify my obj with id
    const objWithIdStr = JSON.stringify(objWithId);
    // fs.writeFile to save object on disk
    //    this.rootDir + / + ${_id}.json
    fs.writeFile(`${this.rootDir}/${_id}`, objWithIdStr, err => {
      // invoke callback(err, obj with id)
      // if(err) return callback(err)
      callback(err, objWithId);
    });
  }

  findById(_id, callback) {
    // readJSON
    // fs.readFile to read the this.rootDir + / + ${_id} file
    // JSON.parse to turn string into object
    // callback(err, parsedJSON)
  }
}

module.exports = Store
