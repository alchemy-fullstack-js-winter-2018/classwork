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
    fs.writeFile(this.storedFilePath(_id), objWithIdStr, err => {
      // invoke callback(err, obj with id)
      // if(err) return callback(err)
      callback(err, objWithId);
    });
  }

  findById(_id, callback) {
    // readJSON
    // fs.readFile to read the this.rootDir + / + ${_id} file
    fs.readFile(this.storedFilePath(_id), { encoding: 'utf8' }, (err, data) => {
      // JSON.parse to turn string into object
      try {
        const obj = JSON.parse(data);
        callback(err, obj);
      } catch (e) {
        callback(e);
      }
    });
  }

  find(callback) {
    // fs.readdir -> list of files -> list of _id
    // -> forEach _id in listOfFiles call this.findById
    // keep a count of returned callbacks
    fs.readdir(this.rootDir, (err, listOfIds) => {
      // keep a count of the number of times findById has returned
      let count = listOfIds.length;
      if (count < 1) return callback(err, []);

      const items = []
      listOfIds.forEach(_id => {
        this.findById(_id, (err, item) => {
          // -> decrement count
          count--;
          // -> push the item to items
          items.push(item);
          // -> if count === 0 return callback(null, items)
          if (count === 0) callback(null, items);
        });
      })
    })
  }

  storedFilePath(_id) {
    return `${this.rootDir}/${_id}`
  }
}

module.exports = Store
