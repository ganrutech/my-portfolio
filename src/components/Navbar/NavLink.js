import React from "react";
import PropTypes from "prop-types";

const NavLink = ({ text }) => {
  return (
    <a
      href={`#${text}`}
      className="uppercase transition ease-in-out duration-300 hover:text-primary hover:scale-110"
    >
      {text}
    </a>
  );
};

NavLink.propTypes = {
  text: PropTypes.string.isRequired,
};

export default NavLink;
