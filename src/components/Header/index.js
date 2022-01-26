import React from "react";
import About from "./About";
// Components
import Contact from "./Contact";
import ProfilePicture from "./ProfilePicture";

const Header = () => {
  return (
    <div className="h-[700px] w-full p-20 bg-light flex justify-between relative">
      <Contact />
      <About />
      <ProfilePicture />
    </div>
  );
};

export default Header;
