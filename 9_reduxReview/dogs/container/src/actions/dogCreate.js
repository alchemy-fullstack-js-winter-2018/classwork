export const DOG_CREATE_UPDATE_NAME = 'DOG_CREATE_UPDATE_NAME';
export const updateName = name => ({
  type: DOG_CREATE_UPDATE_NAME,
  payload: name
});

export const DOG_CREATE_UPDATE_AGE = 'DOG_CREATE_UPDATE_AGE';
export const updateAge = age => ({
  type: DOG_CREATE_UPDATE_AGE,
  payload: Number.parseInt(age)
});

export const DOG_CREATE_UPDATE_WEIGHT = 'DOG_CREATE_UPDATE_WEIGHT';
export const updateWeight = weight => ({
  type: DOG_CREATE_UPDATE_WEIGHT,
  payload: weight
});

export const DOG_CREATE = 'DOG_CREATE';
export const addDog = dog => ({
  type: DOG_CREATE,
  payload: dog
});
