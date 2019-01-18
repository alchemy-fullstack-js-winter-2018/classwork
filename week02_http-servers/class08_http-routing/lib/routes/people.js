const People = require('../models/People');
const notFound = require('./notFound');

const post = (req, res) => {
  People.create({
    name: req.body.name,
    age: req.body.age,
    favoriteColor: req.body.favoriteColor
  }, (err, createdPerson) => {
    res.sendWithError(err, createdPerson);
  });
};

const get = (req, res) => {
  if(!req.id) {
    People.find((err, listOfPeople) => {
      res.sendWithError(err, listOfPeople);
    });
  } else {
    People.findById(req.id, (err, person) => {
      res.sendWithError(err, person);
    });
  }
};

const put = (req, res) => {
  People.findByIdAndUpdate(req.id, {
    name: req.body.name,
    age: req.body.age,
    favoriteColor: req.body.favoriteColor
  }, (err, updatedPerson) => {
    res.sendWithError(err, updatedPerson);
  });
};

const del = (req, res) => {
  People.findByIdAndDelete(req.id, (err, data) => {
    res.sendWithError(err, data);
  });
};

// an object of supported methods
const methods = {
  post,
  get,
  put,
  delete: del
};

module.exports = (req, res) => {
  // get the method from the request and associated handler
  const method = methods[req.method.toLowerCase()] || notFound;
  method(req, res);
};
