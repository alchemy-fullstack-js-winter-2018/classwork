module.exports = toCheck => {
  return typeof toCheck === 'object' &&
    typeof toCheck.then === 'function';
};
