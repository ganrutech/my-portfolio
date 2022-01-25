import React from "react";
import PropTypes from "prop-types"; // ES6

const Button = ({ text }) => {
  return (
    <a href={`#${text}`} className="capitalize">
      {text}
    </a>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
