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
      .then(personWhoWasCreated => {
        const id = personWhoWasCreated._id;
      });
  });
});
