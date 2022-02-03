import React from "react";
import Header from "../Header";

// Components
import Navbar from "../Navbar";
import Technologies from "../Technologies";
import Work from "../Work";
import Projects from "../Projects";

const Layout = () => {
  return (
    <div className="bg-white !text-secondary !overflow-x-hidden">
      <Navbar />
      <Header />
      <Technologies />
      <Work />
      <Projects />
      <div className="w-full h-[600px] bg-green-100"></div>
    </div>
  );
};

export default Layout;
