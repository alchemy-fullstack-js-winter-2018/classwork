const mkdirp = require('mkdirp');
const rimraf = require('rimraf');
const request = require('supertest');
const app = require('../lib/app');

const createPerson = name => {
  return request(app)
    .post('/people')
    .send({
      name,
      age: 100,
      favoriteColor: 'red'
    })
    .then(res => res.body);
};

describe('app tests', () => {
  beforeEach(done => {
    rimraf('./data/people', err => {
      done(err);
    });
  });

  beforeEach(done => {
    mkdirp('./data/people', err => {
      done(err);
    });
  });

  it('creates a person', () => {
    return request(app)
      .post('/people')
      .send({
        name: 'Uncle bob',
        age: 100,
        favoriteColor: 'red'
      })
      .then(res => {
        expect(res.body).toEqual({
          name: 'Uncle bob',
          age: 100,
          favoriteColor: 'red',
          _id: expect.any(String)
        });
      });
  });

  it('gets a list of people from our db', () => {
    const namesToCreate = ['ryan', 'ryan1', 'ryan2', 'ryan3'];
    return Promise.all(namesToCreate.map(createPerson))
      .then(() => {
        return request(app)
          .get('/people');
      })
      .then(({ body }) => {
        expect(body).toHaveLength(4);
      });
  });

  it('gets a person by id', () => {
    return createPerson('ryan')
      .then(({ _id }) => {
        return Promise.all([
          Promise.resolve(_id),
          request(app).get(`/people/${_id}`)
        ]);
      })
      .then(([_id, { body }]) => {
        expect(body).toEqual({
          name: 'ryan',
          age: 100,
          favoriteColor: 'red',
          _id
        });
      });
  });

  it('updates a person by id', () => {
    return createPerson('ryan')
      .then(({ _id }) => {
        return Promise.all([
          Promise.resolve(_id),
          request(app).put(`/people/${_id}`).send({ name: 'ryan', age: 1000, favoriteColor: 'blue' })
        ]);
      })
      .then(([_id, { body }]) => {
        expect(body).toEqual({
          name: 'ryan',
          age: 1000,
          favoriteColor: 'blue',
          _id
        });
      });
  });

  it('deletes a person by id', () => {
    return createPerson('ryan')
      .then(({ _id }) => {
        return request(app)
          .delete(`/people/${_id}`);
      })
      .then(({ body }) => {
        expect(body).toEqual({ deleted: 1 });
      });
  });

  it('404 when a route is not found', () => {
    return request(app)
      .get('/notHere')
      .then(res => {
        expect(res.status).toEqual(404);
        expect(res.body).toEqual({ error: 'Not Found' });
      });
  });
});
