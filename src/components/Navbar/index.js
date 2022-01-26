import React from "react";
import { FiPhoneCall } from "react-icons/fi";
// Components
import NavLink from "./NavLink";

const navbarArr = [
  {
    text: "services",
  },
  {
    text: "work",
  },
  {
    text: "experience",
  },
];

const Navbar = () => {
  return (
    <nav className="w-full h-14 px-20 bg-light flex flex-row items-center">
      <div className="basis-40">Logo</div>
      <div className="flex-grow	flex justify-center space-x-24">
        {navbarArr &&
          navbarArr.map((item) => <NavLink key={item.text} text={item.text} />)}
      </div>
      <div className="cursor-pointer font-medium text-sm flex items-center space-x-4">
        <span>(+91) 90870 76769</span>
        <div className="p-2.5 rounded-full shadow-md bg-white">
          <FiPhoneCall className="text-primary" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
