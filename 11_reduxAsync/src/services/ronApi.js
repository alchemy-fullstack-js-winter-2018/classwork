export const getFacts = count => {
  return fetch(`http://ron-swanson-quotes.herokuapp.com/v2/quotes/${count}`)
    .then(res => res.json());
};
