import React from "react";
import Header from "../Header";

// Components
import Navbar from "../Navbar";
import Technologies from "../Technologies";
import Work from "../Work";
import Projects from "../Projects";
import Archievements from "../Achievements";

const Layout = () => {
  return (
    <div className="mt-10 bg-white !text-secondary !overflow-x-hidden">
      <Navbar />
      <Header />
      <Technologies />
      <Work />
      <Projects />
      <Archievements />
    </div>
  );
};

export default Layout;
