import React from "react";
import About from "./About";
// Components
import Contact from "./Contact";
import Profile from "../../assets/images/profile.png";
import Paint from "../../assets/images/paint.png";

const Header = () => {
  return (
    <div className="h-[700px] w-full p-20 bg-light flex justify-between relative">
      <Contact />
      <About />
      <div className="absolute left-1/3 bottom-0">
        <img src={Paint} alt="bg" className="w-[530px] opacity-90" />
      </div>
      <div className="absolute z-10 left-1/3 bottom-0">
        <div className="w-1/2">
          <img src={Profile} alt="profile" className="w-[800px]" />
        </div>
      </div>
    </div>
  );
};

export default Header;
