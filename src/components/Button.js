import React from "react";
import PropTypes from "prop-types";
import "../styles/button.scss";

const Button = props => {
  const { className, label, type, onClick } = props;
  return (
    <button className={className} onClick={() => onClick(type, label)}>
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  priority: PropTypes.string,
  className: PropTypes.string
};

export default Button;
