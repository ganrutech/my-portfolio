import React, { useState } from "react";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
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
    text: "achievements",
  },
  {
    text: "experience",
  },
  {
    text: "projects",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <nav className="w-full h-14 px-7 xl:px-14 bg-light flex flex-row items-center fixed z-50 top-0">
        <div className="text-xl xl:text-2xl z-0">𝒢𝓊𝓇𝓊𝓅𝓇𝒶𝓀𝒶𝓈𝒽</div>
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-5 cursor-pointer block lg:hidden"
        >
          {open ? <AiOutlineClose size={18} /> : <AiOutlineMenu size={18} />}
        </div>
        <div
          className={`-z-10 w-full h-50 p-5 lg:p-0 lg:h-0 bg-white lg:bg-light flex-grow flex flex-col lg:flex-row justify-end place-items-end lg:place-items-center lg:space-x-5 xl:space-x-10 absolute ${
            open ? "top-14" : "top-[-450px]"
          } right-0 lg:relative lg:top-0 transition-all duration-200 ease-in shadow`}
        >
          {navbarArr &&
            navbarArr.map((item) => (
              <NavLink
                key={item.text}
                handleLink={() => setOpen(!open)}
                text={item.text}
              />
            ))}
          <div className="cursor-pointer font-medium text-sm flex items-center space-x-4">
            <span>(+91) 90870 76769</span>
            <div className="p-2.5 rounded-full shadow-md bg-white">
              <FiPhoneCall className="text-primary" />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
