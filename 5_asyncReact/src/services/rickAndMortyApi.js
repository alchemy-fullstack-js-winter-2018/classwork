export const getCharacters = () => {
  return fetch('https://swapi.co/api/people', {
    headers: {
      origin: null
    }
  })
    .then(res => res.json())
    .then(json => ({
      totalPages: Math.ceil(json.count / 10),
      results: json.results
    }));
};
