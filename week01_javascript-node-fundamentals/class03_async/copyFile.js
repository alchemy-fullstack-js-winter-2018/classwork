const fs = require('fs');

fs.readFile(src, { encoding: 'utf8' }, (err, data) => {
  if (err) throw `Error reading file: ${err}`;
  fs.writeFile(dst, data, err => {
    if (err) throw err;
  });
});

function copy(src, dst, callback) {
  // we copy a file
}
