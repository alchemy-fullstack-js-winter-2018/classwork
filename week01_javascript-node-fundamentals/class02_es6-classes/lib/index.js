const shortid = require('shortid');

class MemoryDatabase {
  constructor() {
    this.store = {};
  }

  create(obj) {
    const _id = shortid.generate();
    const copiedObj = { ...obj, _id };
    this.store[_id] = copiedObj;
    return copiedObj;
  }

  findById(_id) {
    const obj = this.store[_id];
    // if(!obj) {
    //   throw `No object with _id ${_id}`;
    // } else {
    //   return obj;
    // }

    if(!obj) {
      throw `No object with _id ${_id}`;
    }

    return obj;
  }
}


module.exports = MemoryDatabase;
