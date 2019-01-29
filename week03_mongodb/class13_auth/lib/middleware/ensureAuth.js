const bearerToken = (req, res, next) => {
  // Bearer oethuoebuoeruh.,cruhh3249034he
  const token = req
    .get('Authorization')
    .replace(/Bearer\s/i, '');

  // oethuoebuoeruh.,cruhh3249034he
  req.token = token;
  next();
};

const ensureAuth = (req, res, next) => {
  // assume that req.token
};

module.exports = {
  bearerToken
};
