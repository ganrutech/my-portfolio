import React from "react";
import { FiPhoneCall } from "react-icons/fi";
// Components
import NavLink from "./NavLink";

const navbarArr = [
  {
    text: "contact",
  },
  {
    text: "technologies",
  },
  {
    text: "experience",
  },
  {
    text: "projects",
  },
  {
    text: "achievements",
  },
];

const Navbar = () => {
  return (
    <div className="relative">
      <nav className="w-full h-14 px-14 bg-light flex flex-row items-center fixed z-50 top-0">
        <div className="text-2xl">𝒢𝓊𝓇𝓊𝓅𝓇𝒶𝓀𝒶𝓈𝒽</div>
        <div className="flex-grow	flex justify-center space-x-10">
          {navbarArr &&
            navbarArr.map((item) => (
              <NavLink key={item.text} text={item.text} />
            ))}
        </div>
        <div className="cursor-pointer font-medium text-sm flex items-center space-x-4">
          <span>(+91) 90870 76769</span>
          <div className="p-2.5 rounded-full shadow-md bg-white">
            <FiPhoneCall className="text-primary" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
