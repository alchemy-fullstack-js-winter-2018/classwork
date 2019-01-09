const fs = require('fs');

function readJSON(pathToFile, callback) {
  fs.readFile(pathToFile, { encoding: 'utf8' }, (err, data) => {
    if (err) {
      return callback(err)
    }

    // JSON.parse to create a JSON object from data
    try {
      const json = JSON.parse(data);
      // invoke callback(null, json)
      callback(null, json)
    } catch (e) {
      callback(e)
    }
  });
}

function writeJSON(pathToFile, obj, callback) {
  try {
    // JSON.stringify my obj
    const strObject = JSON.stringify(obj);
    // fs.writeFile to write file to disk
    fs.writeFile(pathToFile, strObject, err => {
      callback(err)
    });
  } catch (e) {
    callback(e)
  }
}

module.exports = {
  readJSON,
  writeJSON
};
