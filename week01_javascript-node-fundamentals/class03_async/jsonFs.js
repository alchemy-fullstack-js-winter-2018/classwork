const fs = require('fs');

function readJSON(pathToFile, callback) {
  fs.readFile(pathToFile, { encoding: 'utf8' }, (err, data) => {
    if (err) {
      return callback(err)
    }

    // JSON.parse to create a JSON object from data
    const json = JSON.parse(data);
    // invoke callback(null, json)

    callback(null, json)
  });
}

module.exports = {
  readJSON
};
