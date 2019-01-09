const fs = require('fs');

fs.writeFile('writing.txt', 'Writing stuff', err => {
  if (err) {
    throw err;
  }
});
