import React from "react";
import PropTypes from "prop-types";
import "../styles/display.scss";

const Display = props => {
  const { display, result } = props;
  return (
    <div className="display">
      <div className="formula">{display}</div>
      <div className="result">{result}</div>
    </div>
  );
};

Display.propTypes = {
  display: PropTypes.string.isRequired,
  result: PropTypes.string.isRequired
};

export default Display;
