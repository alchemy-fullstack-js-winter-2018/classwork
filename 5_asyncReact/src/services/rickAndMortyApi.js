const requestApi = (resource, page) => {
  return fetch(`https://rickandmortyapi.com/api/${resource}?page=${page}`)
    .then(res => res.json())
    .then(json => ({
      totalPages: json.info.pages,
      results: json.results
    }));
};;

export const getCharacters = page => {
  return requestApi('character', page);
};

export const getLocations = page => {
  return requestApi('location', page);
};

export const getEpisodes = page => {
  return requestApi('episode', page);
};
