import store from '../store';

const API_URL = process.env.API_URL;

const request = (url, method, body) => {
  return fetch(`${API_URL}${url}`, {
    method,
    body: body && JSON.stringify(body),
    headers: {
      'Authorization': `Bearer ${store.getState().auth.token}`
    }
  })
    .then(res => [res.ok, res.json()])
    .then(([ok, json]) => {
      if(!ok) throw json;
      return json;
    });
};

export const get = url => request(url, 'GET');
