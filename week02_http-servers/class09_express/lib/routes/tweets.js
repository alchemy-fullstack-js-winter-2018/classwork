const { Router } = require('express');

module.exports = Router()
  .get('/:name', (req, res) => {
    console.log(req.params);
    res.end(req.params.name);
  })
  .get('/', (req, res) => {
    res.end('root');
  });
