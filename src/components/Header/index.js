import React from "react";
import About from "./About";
// Components
import Contact from "./Contact";
import ProfilePicture from "./ProfilePicture";

const Header = () => {
  return (
    <div className="h-[600px] w-full bg-light relative">
      <div className="w-full h-full p-20 flex justify-between">
        <Contact />
        <About />
      </div>
      <div className="w-full flex place-content-center absolute bottom-0">
        <ProfilePicture />
      </div>
    </div>
  );
};

export default Header;
