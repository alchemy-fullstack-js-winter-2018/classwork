export const getCharacters = page => {
  return fetch(`https://swapi.co/api/people?page=${page}`, {
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
