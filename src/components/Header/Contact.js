import React from "react";

const Contact = () => {
  return (
    <div className="flex-shrink-0 z-10 w-2/3 h-full flex flex-col justify-between">
      <div className="text-5xl font-semibold leading-snug -tracking-wide">
        <p>Hey There,</p>
        <p>I'm Guruprakash</p>
      </div>

      <p className="text--orange underline">ganrutech@gmail.com</p>

      <div className="flex items-center space-x-2">
        <div className="text-4xl font-semibold">5.5</div>
        <div className="font-medium leading-tight uppercase">
          Years
          <br />
          Experience
        </div>
      </div>
    </div>
  );
};

export default Contact;
