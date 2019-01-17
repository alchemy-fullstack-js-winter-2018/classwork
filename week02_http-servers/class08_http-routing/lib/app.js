const peopleRoutes = require('./routes/people');
const { parse } = require('url');



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

  const url = parse(req.url, true);
  res.setHeader('Content-Type', 'application/json');
  if(url.pathname.includes('/people')) {
    return peopleRoutes(req, res);
  } else if(url.pathname.includes('/tweets')) {
    return tweetsRoutes(req, res);
  } else {
    notFound(req, res);
  }
};
