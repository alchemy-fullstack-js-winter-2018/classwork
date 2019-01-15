const { parse } = require('url');

module.exports = (req, res) => {
  const url = parse(req.url);
  if(url.pathname === '/tester') {
    res.end('testing123');
  }
};
