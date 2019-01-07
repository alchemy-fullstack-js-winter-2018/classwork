function addDeclared(a, b) {
  return a + b;
}

const addExpressed = function(a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

module.exports = {
  addDeclared,
  addExpressed,
  addArrow
};
