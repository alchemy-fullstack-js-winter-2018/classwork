const fs = require('fs');

function copy(src, dst, callback) {
  fs.readFile(src, { encoding: 'utf8' }, (err, data) => {
    if (err) {
      return callback(err);
    }

    fs.writeFile(dst, data, err => {
      if (err) {
        return callback(err);
      }
      return callback();
    });
  });
}


module.exports = copy;
