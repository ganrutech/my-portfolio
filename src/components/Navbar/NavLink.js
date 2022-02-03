import React from "react";
import PropTypes from "prop-types";

const NavLink = ({ text }) => {
  const handleScroll = (e) => {
    e.preventDefault();
    const target = e.target.getAttribute("href");
    const element = document.querySelector(target);
    if (element) {
      const location = element.offsetTop;
      window.scrollTo({
        left: 0,
        top: location - 56,
      });
    }
  };

  return (
    <a
      href={`#${text}`}
      className="uppercase transition ease-in-out duration-300 hover:text-primary hover:scale-110"
      onClick={handleScroll}
    >
      {text}
    </a>
  );
};

NavLink.propTypes = {
  text: PropTypes.string.isRequired,
};

export default NavLink;
