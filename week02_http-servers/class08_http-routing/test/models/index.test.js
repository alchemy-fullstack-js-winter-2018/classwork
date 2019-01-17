const mkdirp = require('mkdirp');
const rimraf = require('rimraf');
const Store = require('../../lib/models/index');

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

  it('find all objects tracked by the store', done => {
    store.create({ item: 1 }, (err, item1) => {
      store.create({ item: 2 }, (err, item2) => {
        store.create({ item: 3 }, (err, item3) => {
          store.create({ item: 4 }, (err, item4) => {
            store.create({ item: 5 }, (err, item5) => {
              store.find((err, listOfItems) => {
                expect(err).toBeFalsy();
                expect(listOfItems).toHaveLength(5);
                expect(listOfItems).toContainEqual(item1);
                expect(listOfItems).toContainEqual(item2);
                expect(listOfItems).toContainEqual(item3);
                expect(listOfItems).toContainEqual(item4);
                expect(listOfItems).toContainEqual(item5);
                done();
              });
            });
          });
        });
      });
    });
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

  it('deletes an object with an id', done => {
    // create an item in
    store.create({ item: 'I am going to delete' }, (err, createdItem) => {
      // -> delete that item
      store.findByIdAndDelete(createdItem._id, (err, result) => {
        expect(err).toBeFalsy();
        expect(result).toEqual({ deleted: 1 });
        // -> -> findById(idFromCreatedItem)
        store.findById(createdItem._id, (err, foundItem) => {
          // -> -> -> expect(foundItem).toBeFalsy()
          expect(err).toBeTruthy();
          expect(foundItem).toBeFalsy();
          done();
        });
      });
    });
  });

  it('updates an existing object', done => {
    // store.create
    store.create({ name: 'rayn' }, (err, typoCreated) => {
      // -> store.findByIdAndUpdate(createdObject._id, updatedObject, callback)
      store.findByIdAndUpdate(typoCreated._id, { name: 'ryan' }, (err, updatedWithoutTypo) => {
        // -> -> expect updatedObject returned in callback
        expect(err).toBeFalsy();
        expect(updatedWithoutTypo).toEqual({ name: 'ryan', _id: typoCreated._id })
        // -> -> store.findById(createdObject._id)
        store.findById(typoCreated._id, (err, foundObj) => {
          // -> -> -> expect updated object
          expect(foundObj).toEqual(updatedWithoutTypo);
          done();
        })

      });
    });
  });
});
