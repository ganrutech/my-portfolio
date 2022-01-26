import React from "react";
import Header from "../Header";

// Components
import Navbar from "../Navbar";
import AnimateOnScroll from "../examples/AnimateOnScroll";

const Layout = () => {
  return (
    <div className="!text-secondary !overflow-x-hidden">
      <Navbar />
      <Header />
      <div className="w-full h-[600px] bg-gray-100"></div>
      <AnimateOnScroll />
    </div>
  );
};

export default Layout;
