import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

function AddDogForm({ name, age, weight, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="name" value={name} onChange={onChange} />
      <input type="number" name="age" value={age} onChange={onChange} />
      <input type="text" name="weight" value={weight} onChange={onChange} />
      <button>Add</button>
    </form>
  )
}

export default AddDogForm;
