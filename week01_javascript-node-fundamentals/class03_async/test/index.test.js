const mkdirp = require('mkdirp');
const rimraf = require('rimraf');
const Store = require('../lib/index');

describe('Store', () => {
  let store = null;
  beforeEach(done => {
    rimraf('./testData/store', err => {
      done(err);
    });
  });

  beforeEach(done => {
    mkdirp('./testData/store', err => {
      done(err);
    });
  });

  beforeEach(() => {
    store = new Store('./testData/store');
  });

  it('creates an object in my store', done => {
    store.create({ name: 'ryan' }, (err, createdPerson) => {
      expect(err).toBeFalsy();
      expect(createdPerson).toEqual({ name: 'ryan', _id: expect.any(String) });
      done();
    });
  });

  it('finds an object by id', done => {
    // create an object
    store.create({ name: 'uncle bob' }, (err, createdUncle) => {
      // after done creating -> findById
      store.findById(createdUncle._id, (err, foundUncle) => {
        // after found check that it is the same one that we created
        expect(err).toBeFalsy();
        expect(foundUncle).toEqual({ name: 'uncle bob', _id: createdUncle._id });
        // then call done
        done();
      });
    });
  });

  it('find all objects tracked by the store', () => {
    // create a bunch of objects (at least 5)
    //  create ->
    //    create ->
    //      create ->
    //        create ->
    //          create ->
    //            find ->
    //              write our real tests (our expects)
    //              expect an array with 5 items
    //              expect an array containing the first item
    //              expect an array containing the second item
    //              .... to 5
    //              done()
  });
})
