const request = require('superagent');

const getQuotes = numberOfQuotes => {
  return request
    .get(`https://ron-swanson-quotes.herokuapp.com/v2/quotes/${numberOfQuotes}`)
    .then(res => res.body);
};

module.exports = {
  getQuotes
};
