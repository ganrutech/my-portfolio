import React from "react";
import Button from "./Button";
import { FiPhoneCall } from "react-icons/fi";

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

const index = () => {
  return (
    <nav className="w-full h-14 px-4 bg-light-bg flex flex-row items-center">
      <div className="flex-grow">Logo</div>
      <div className="basis-5/6	flex justify-center space-x-28">
        {navbarArr &&
          navbarArr.map((item) => <Button key={item.text} text={item.text} />)}
      </div>
      <div className="flex-grow cursor-pointer font-medium text-sm flex items-center space-x-3">
        <span>+91 90870 76769</span>
        <div className="p-2.5 rounded-full shadow-md bg-white">
          <FiPhoneCall className="text-primary" />
        </div>
      </div>
    </nav>
  );
};

export default index;
