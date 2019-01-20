const request = require('superagent');

const getCharacter = id => {
  return request
    .get(`https://swapi.co/api/people/${id}`)
    .then(res => ({
      name: res.body.name,
      height: res.body.height,
      mass: res.body.mass,
      hairColor: res.body.hair_color,
      birthYear: res.body.birth_year
    }));
};

module.exports = {
  getCharacter
};
