const { getQuotes } = require('../services/ronSwansonApi');

module.exports = (req, res, next) => {
  getQuotes(1)
    .then(([quote]) => {
      req.quote = quote;
      next();
    })
    .catch(next);
};
