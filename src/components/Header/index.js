import React from "react";
import About from "./About";
// Components
import Contact from "./Contact";
import ProfilePicture from "./ProfilePicture";

const Header = () => {
  return (
    <div id="contact" className="h-[600px] w-full bg-light relative">
      <div className="w-full flex place-content-center relative md:absolute md:bottom-0">
        <ProfilePicture />
      </div>
      <div className="w-full h-full p-8 md:p-16 xl:p-20 flex flex-row justify-between md:space-x-20 xl:space-x-0">
        <Contact />
        <About />
      </div>
    </div>
  );
};

export default Header;
