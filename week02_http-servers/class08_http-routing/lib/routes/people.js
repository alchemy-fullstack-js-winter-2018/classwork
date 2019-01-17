const People = require('../models/People');
const bodyParser = require('../bodyParser');
const { parse } = require('url');

const getId = url => url.pathname.slice(1).split('/')[1];

module.exports = (req, res) => {
  const url = parse(req.url, true);
  if(req.method === 'POST' && url.pathname === '/people') {
    bodyParser(req)
      .then(({ name, age, favoriteColor }) => {
        People.create({
          name,
          age,
          favoriteColor
        }, (err, createdPerson) => {
          res.sendWithError(err, createdPerson);
        });
      });
  } else if(req.method === 'GET' && url.pathname === '/people') {
    People.find((err, listOfPeople) => {
      res.sendWithError(err, listOfPeople);
    });
  } else if(req.method === 'GET' && url.pathname.includes('/people/')) {
    People.findById(getId(url), (err, person) => {
      res.sendWithError(err, person);
    });
  } else if(req.method === 'PUT' && url.pathname.includes('/people/')) {
    bodyParser(req)
      .then(({ name, age, favoriteColor }) => {
        People.findByIdAndUpdate(getId(url), {
          name,
          age,
          favoriteColor
        }, (err, updatedPerson) => {
          res.sendWithError(err, updatedPerson);
        });

      });
  } else if(req.method === 'DELETE' && url.pathname.includes('/people/')) {
    People.findByIdAndDelete(getId(url), (err, data) => {
      res.sendWithError(err, data);
    });
  }
};
