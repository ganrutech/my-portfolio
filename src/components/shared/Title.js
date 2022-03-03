import React from "react";
import PropTypes from "prop-types";

const Title = ({ title, subtitle }) => {
  return (
    <div className="w-full font-bold uppercase pt-8 pb-4 flex items-center place-content-center relative">
      <div className="self-center text-secondary text-opacity-10 text-3xl md:text-5xl xl:text-6xl">
        {title}
      </div>
      {subtitle && (
        <div className="flex h-full items-center text-xs md:text-xl text-primary absolute">
          {subtitle}
        </div>
      )}
    </div>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

export default Title;
