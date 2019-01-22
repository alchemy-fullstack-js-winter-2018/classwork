module.exports = (req, res, next) => {
  res.status(404).send({ error: 'Not Found' });
  next();
};
