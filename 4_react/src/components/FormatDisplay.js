import React from 'react';
import PropTypes from 'prop-types';

function FormatDisplay({ formattedText, formattedTextRef }) {
  return <h2 ref={formattedTextRef}><pre>{formattedText}</pre></h2>;
}

FormatDisplay.propTypes = {
  formattedText: PropTypes.string,
  formattedTextRef: PropTypes.object.isRequired
};

export default FormatDisplay;
