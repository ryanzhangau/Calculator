import React from "react";
import PropTypes from "prop-types";
import "../styles/display.scss";

const Display = props => {
  const { display, result } = props;
  return (
    <section className="display">
      <div className="formula" aria-label={display}>
        {display}
      </div>
      <div className="result" aria-label={result}>
        {result}
      </div>
    </section>
  );
};

Display.propTypes = {
  display: PropTypes.string.isRequired,
  result: PropTypes.string.isRequired
};

export default Display;
