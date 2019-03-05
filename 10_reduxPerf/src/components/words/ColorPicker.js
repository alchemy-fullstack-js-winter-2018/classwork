import React from 'react';
import PropTypes from 'prop-types';

function ColorPicker({ color, onChange }) {
  return <input type="color" value={color} onChange={onChange} />;
}

ColorPicker.propTypes = {
  color: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default ColorPicker;
