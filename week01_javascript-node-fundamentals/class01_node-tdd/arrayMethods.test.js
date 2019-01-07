describe('array methods', () => {
  describe('assumptions', () => {
    describe('map', () => {
      it('add three to each item in an array', () => {
        const addedThree = [1, 2, 3, 4].map(ele => {
          return ele + 3;
        });

        expect(addedThree).toEqual([4, 5, 6, 7]);
      });

      it('can return the identical array', () => {
        const identity = [1, 2, 3, 4, 5].map(ele => ele);
        expect(identity).toEqual([1, 2, 3, 4, 5]);
      });
    });

    describe('filter', () => {
      it('can return only odd numbers from an array', () => {
        const odds = [1, 2, 3, 4, 5].filter(ele => {
          return ele % 2 !== 0;
        });

        expect(odds).toEqual([1, 3, 5]);
      });

      it('can return only number greater than 2', () => {
        const large = [-2, 0, 1, 3, 5].filter(ele => {
          return ele > 2;
        });

        expect(large).toEqual([3, 5]);
      });
    });

    

  });
});
