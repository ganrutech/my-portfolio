import React from "react";

import UdemyLogo from "../../assets/images/logo-udemy.svg";

const About = () => {
  return (
    <div className="h-full z-10 flex flex-col justify-around">
      <div className="self-center text--primary text-xl text-center">
        <p>Full Stack</p>
        <p>Web and Mobile Application Developer</p>
      </div>
      <div className="self-center w-1/2 flex flex-col items-center space-y-2 text-center uppercase">
        <img src={UdemyLogo} alt="udemy" width={120} height="auto" />
        <p className="font-medium">
          React JS course certified developer - Associate
        </p>
      </div>
    </div>
  );
};

export default About;
