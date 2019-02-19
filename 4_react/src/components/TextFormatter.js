import React from 'react';
import PropTypes from 'prop-types';

function TextFormatter({
  text,
  font,
  onChange,
  onSubmit
}) {
  const fontOptions = ['Ghost', 'Weird', 'Chunky', 'Basic', 'Lil Devil'].map(f => {
    return <option key={f} value={f}>{f}</option>;
  });

  return (
    <form onSubmit={onSubmit}>
      <select name="font" onChange={onChange} value={font}>
        {fontOptions}
      </select>
      <input type="text" name="text" value={text} onChange={onChange} />
      <button type="submit">Create Image</button>
    </form>
  );
}

TextFormatter.propTypes = {
  text: PropTypes.string.isRequired,
  font: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default TextFormatter;
