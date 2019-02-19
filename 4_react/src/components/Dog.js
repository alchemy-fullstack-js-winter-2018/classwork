import React from 'react';
import PropTypes from 'prop-types';

function Dog({ name, about }) {
  // const { name } = props;
  return (
    <>
      <p>This is my dog {name}</p>
      <p>{about}</p>
    </>
  );
}

Dog.propTypes = {
  name: PropTypes.string.isRequired,
  about: PropTypes.string
};

export default Dog;
