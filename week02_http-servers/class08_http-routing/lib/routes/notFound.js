module.exports = (req, res) => {
  res.statusCode = 404;
  res.end(JSON.stringify({ error: 'Not Found' }));
};
