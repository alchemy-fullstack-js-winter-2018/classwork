export const getCharacters = page => {
  return fetch(`https://rickandmortyapi.com/api/character?page=${page}`, {
    headers: {
      origin: null
    }
  })
    .then(res => res.json())
    .then(json => ({
      totalPages: json.info.pages,
      results: json.results
    }));
};
