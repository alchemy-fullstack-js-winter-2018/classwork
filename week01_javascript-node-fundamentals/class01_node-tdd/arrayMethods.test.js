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

    describe('findIndex', () => {
      it('finds an index in an array when an element matches 4', () => {
        const firstIndex = [2, 4, 6, 8, 10, 4].findIndex(ele => {
          return ele === 4;
        });

        expect(firstIndex).toEqual(1);
      });

      it('fids an index in an array when an element is greater than 5', () => {
        const firstIndex = [1, 3, 5, 7, 9].findIndex(ele => {
          return ele > 5;
        });

        expect(firstIndex).toEqual(3);
      });
    });

    describe('reduce', () => {
      it('can sum numbers together', () => {
        const sum = [1, 2, 3].reduce((accumulator, ele) => {
          return accumulator + ele;
        });

        expect(sum).toEqual(6);
      });

      it('can multiply numbers together', () => {
        const product = [1, 2, 3].reduce((acc, ele) => {
          return acc * ele;
        }, 2);

        expect(product).toEqual(12);
      });

      it('can concatenate numbers into a string', () => {
        const str = [1, 2, 3].reduce((acc, ele) => {
          return `${acc}${ele}`;
        });

        expect(str).toEqual('123');
      });
    });
  });
});
