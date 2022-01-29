import React from "react";
import Header from "../Header";

// Components
import Navbar from "../Navbar";
import AnimateOnScroll from "../examples/AnimateOnScroll";
import Technologies from "../Technologies";
import Work from "../Work";

const Layout = () => {
  return (
    <div className=" bg-gray-100 !text-secondary !overflow-x-hidden">
      <Navbar />
      <Header />
      <Technologies />
      <Work />
      <AnimateOnScroll />
    </div>
  );
};

export default Layout;
