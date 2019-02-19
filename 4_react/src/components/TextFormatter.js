import React from 'react';
import PropTypes from 'prop-types';

function TextFormatter({
  text,
  font,
  handleChange,
  textToImage
}) {
  const fontOptions = ['Ghost', 'Weird', 'Chunky', 'Basic', 'Lil Devil'].map(f => {
    return <option key={f} value={f}>{f}</option>;
  });

  return (
    <form onSubmit={textToImage}>
      <select name="font" onChange={handleChange} value={font}>
        {fontOptions}
      </select>
      <input type="text" name="text" value={text} onChange={handleChange} />
      <button type="submit">Create Image</button>
    </form>
  );
}

TextFormatter.propTypes = {
  text: PropTypes.string.isRequired,
  font: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  textToImage: PropTypes.func.isRequired
};

export default TextFormatter;
