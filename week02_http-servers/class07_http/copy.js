const fsPromise = require('fs').promises;

module.exports = (src, dst) => {
  return fsPromise.readFile(src)
    .then(data => fsPromise.writeFile(dst, data))
    .catch(err => console.error(err))
}
