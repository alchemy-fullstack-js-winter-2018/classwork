function powerDeclared(n, exponent) {
  // return Math.pow(n, exponent);
  return n ** exponent;
}

const powerExpressed = function(n, exponent) {
  return n ** exponent;
};

const powerArrow = (n, exponent) => n ** exponent;

module.exports = {
  powerDeclared,
  powerExpressed,
  powerArrow
};
