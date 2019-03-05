import { defaultEquality, memoize } from './memo';

describe('Memo', () => {
  describe('defaultEquality', () => {
    it('can tell if arguments are the same', () => {
      const prevArguments = [1, 2, 3];
      const nextArguments = [1, 2, 3];

      expect(defaultEquality(prevArguments, nextArguments)).toBeTruthy();
    });

    it('can tell if arguments are not the same', () => {
      const prevArguments = [1, 2, 3];
      const nextArguments = [1, 2, 4];

      expect(defaultEquality(prevArguments, nextArguments)).toBeFalsy();
    });

    it('can tell if arguments are different because of length', () => {
      const prevArguments = [1, 2, 3];
      const nextArguments = [1, 2, 3, 4];

      expect(defaultEquality(prevArguments, nextArguments)).toBeFalsy();
    });
  });

  describe('memoize', () => {
    it('memoizes a function', () => {
      const fn = jest.fn();
      const memo = memoize(fn);

      memo(1, 2, 3);
      memo(1, 2, 3);
      memo(1, 2, 3);
      memo(1, 2, 3);

      expect(fn).toBeCalledTimes(1);

      memo(1, 2, 4);
      memo(1, 2, 4);

      expect(fn).toBeCalledTimes(2);

      memo(1, 2, 3);
      memo(1, 2, 4);

      expect(fn).toBeCalledTimes(4);
    });
  });
});
