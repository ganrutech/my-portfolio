import React from "react";
import Title from "../shared/Title";

const projectsList = [
  {
    title: "SD-WAN Portal",
    subtitle: "Web Application - React JS",
    technologies: ["TailwindCSS", "Antd UI Component", "Webpack 5"],
    color: "#0777af",
    image: "bg-SDWAN-BG",
  },
  {
    title: "IOT Solution for Energy",
    subtitle: "Mobile Application - Front-End",
    technologies: ["Flutter", "Android", "IOS"],
    color: "#276F6B",
    image: "bg-IOT-BG",
  },
  {
    title: "E-Commerce",
    subtitle: "Web Application - Next JS",
    technologies: ["React JS", "TailwindCSS", "Antd UI Component"],
    color: "#0777af",
    image: "bg-Ecommerce-BG",
  },
  {
    title: "SD-WAN Analytics",
    subtitle: "Web Application - React JS",
    technologies: ["Material UI Component", "Custom Theme"],
    color: "#276F6B",
    image: "bg-Analytics-BG",
  },
  {
    title: "Hospital Survey Application",
    subtitle: "PHP and Cordova - Full-Stack Mobile & Web",
    technologies: [
      "HTML, CSS & JS",
      "Bootstrap 4",
      "Codeigniter",
      "MySQL",
      "Restful Service",
      "Cordova, Framework 7",
    ],
    color: "#0777af",
    image: "bg-Full-BG",
  },
];

const index = () => {
  return (
    <div id="projects" className="w-full bg-white">
      <div className="px-20">
        <Title title="Projects" subtitle="- My Latest Works -" />
      </div>
      <div className="flex items-center place-content-center space-x-7">
        <div className="text-center">
          <h2 className="font-semibold text-primary">20+</h2>
          <h5>Project Completed</h5>
        </div>
        <div className="text-center">
          <h2 className="font-semibold text-primary">10+</h2>
          <h5>Happy Clients</h5>
        </div>
      </div>
      <div className="w-full px-20 py-10 flex overflow-x-scroll snap-x space-x-6 text-white no-scrollbar">
        {projectsList &&
          projectsList.map((item, key) => (
            <div
              key={key}
              style={{ backgroundColor: item.color }}
              className={`scroll-ml-20 snap-start w-[400px] h-80 flex-shrink-0 ${item.image} bg-[length:280px_280px] bg-no-repeat object-cover bg-[right_-4rem_bottom_-4rem] rounded-2xl overflow-hidden drop-shadow-lg`}
            >
              <div className="h-full p-6 flex flex-col space-y-6">
                <div>
                  <h3 className="capitalize font-semibold">{item.title}</h3>
                  <h5>{item.subtitle}</h5>
                </div>
                <ul className="space-y-3">
                  {item.technologies.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default index;
