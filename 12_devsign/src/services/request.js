import store from '../store';
import { getToken } from '../selectors/session';

const request = (path, method, body) => {
  return fetch(`${process.env.API_URL}${path}`, {
    method,
    body: body ? JSON.stringify(body) : null,
    headers: {
      Authorization: `Bearer ${getToken(store.getState())}`
    }
  })
    .then(res => [res.ok, res.json()])
    .then(([ok, json]) => {
      if(!ok) throw json;
      return json;
    });
};

export const post = (path, body) => request(path, 'POST', body);
export const get = path => request(path, 'GET');
export const put = (path, body) => request(path, 'PUT', body);
export const patch = (path, body) => request(path, 'PATCH', body);
export const del = (path, body) => request(path, 'DELETE', body);
