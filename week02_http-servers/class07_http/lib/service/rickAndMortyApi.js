const request = require('superagent');

const getCharacter = id => {
  return request
    .get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(res => ({
      name: res.body.name,
      status: res.body.status,
      species: res.body.species
    }));
};

const getCharacters = () => {
  return request
    .get('https://rickandmortyapi.com/api/character')
    .then(res => {
      return res.body.results.map(char => ({
        name: char.name,
        status: char.status,
        species: char.species
      }));
    });
};

module.exports = {
  getCharacter,
  getCharacters
};
