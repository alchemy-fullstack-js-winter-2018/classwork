const { parse } = require('url');
const bodyParser = require('./bodyParser');
const people = require('./routes/people');
const notFound = require('./routes/notFound');

const resources = {
  people
};

module.exports = (req, res) => {
  res.send = json => res.end(JSON.stringify(json));
  res.sendWithError = (err, json) => {
    if(err) {
      res.statusCode = 400;
      res.send(err);
    } else {
      res.send(json);
    }
  };

  res.setHeader('Content-Type', 'application/json');
  const url = parse(req.url, true);
  // [people, 1]
  // get resource and id
  const parts = url.pathname.slice(1).split('/');
  const resource = parts[0];
  req.id = parts[1];

  // get the handler for a resource or not found
  const route = resources[resource] || notFound;

  bodyParser(req)
    .then(body => {
      req.body = body;
      route(req, res);
    });
};
