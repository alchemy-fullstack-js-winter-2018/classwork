const bcrypt = require('bcryptjs');
const { hash, compare } = require('../../lib/utils/hash');

describe('hashing functions', () => {
  it('hashes a password', () => {
    return bcrypt.hash('password', 10)
      .then(hashedPassword => {
        expect(hashedPassword).toBeDefined();
      });
  });

  it('creates hashed passwords that are different', () => {
    const password = 'password';
    return bcrypt.hash(password, 10)
      .then(hashedPassword1 => {
        return Promise.all([
          Promise.resolve(hashedPassword1),
          bcrypt.hash(password, 10)
        ]);
      })
      .then(([hash1, hash2]) => {
        expect(hash1).not.toEqual(hash2);
      });
  });

  it('creates the same hash given the same salt', () => {
    const password = 'password';
    const versionInfo = '$2b$10$';
    const salt = 'ABCDEFGHIJKLMNOPQRSTUV';
    const bcryptSalt = `${versionInfo}${salt}`;
    return bcrypt.hash(password, bcryptSalt)
      .then(hashedPassword => {
        return Promise.all([
          Promise.resolve(hashedPassword),
          bcrypt.hash(password, bcryptSalt)
        ]);
      })
      .then(([hash1, hash2]) => {
        expect(hash1).toEqual(hash2);
      });
  });

  it('can compare hashes based on the same password', () => {
    const password = 'password';

    return bcrypt.hash(password, 10)
      .then(hashedPassword => {
        return bcrypt.compare(password, hashedPassword);
      })
      .then(result => {
        expect(result).toBeTruthy();
      });
  });

  it('can compare hashes based on different password', () => {
    return bcrypt.hash('password', 10)
      .then(hashedPassword => {
        return bcrypt.compare('badPassword', hashedPassword);
      })
      .then(result => {
        expect(result).toBeFalsy();
      });
  });

  it('can hash a password', () => {
    return hash('password')
      .then(hashedPassword => {
        expect(hashedPassword).toBeDefined();
        expect(hashedPassword).not.toEqual('password');
      });
  });

  it('can compare a password and string', () => {
    return hash('password')
      .then(hashedPassword => {
        return compare('password', hashedPassword);
      })
      .then(result => {
        expect(result).toBeTruthy();
      });
  });

  it('can compare a bad password and string', () => {
    return hash('password')
      .then(hashedPassword => {
        return compare('badPassword', hashedPassword);
      })
      .then(result => {
        expect(result).toBeFalsy();
      });
  });
});
