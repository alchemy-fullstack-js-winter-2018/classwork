module.exports = {
  getCharacter() {
    // return a promise
    return Promise.resolve({
      name: 'Rick Sanchez',
      species: 'Human',
      status: 'Alive'
    });
  }
};
