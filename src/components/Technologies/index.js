import React from "react";

import { TiHtml5, TiCss3 } from "react-icons/ti";
import {
  SiJavascript,
  SiPhp,
  SiFlutter,
  SiCodeigniter,
  SiTailwindcss,
  SiMysql,
  SiMongodb,
  SiPython,
} from "react-icons/si";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

import ExpBG from "../../assets/images/experience-bg.svg";
import AnimationIcon from "./AnimationIcon";
import Title from "../shared/Title";

const Technologies = () => {
  const { ref, inView } = useInView({ threshold: 0.2 });

  return (
    <div className="w-full h-[600px] px-20 bg-white">
      <Title title="Technologies" subtitle="- Skills -" />

      <div ref={ref} className="px-40 w-full h-5/6 flex items-center">
        <div className="basis-1/4 grid grid-cols-3 gap-20">
          <AnimationIcon position="30vw" inView={inView}>
            <TiHtml5 size={60} color="#F75420" className="m-3" />
          </AnimationIcon>
          <AnimationIcon position="30vw" inView={inView}>
            <TiCss3 size={60} color="#1779B8" className="m-6" />
          </AnimationIcon>
          <AnimationIcon position="20vw" inView={inView}>
            <SiJavascript size={60} color="#F5CF53" className="-mr-8" />
          </AnimationIcon>
          <AnimationIcon position="30vw" inView={inView}>
            <FaReact size={60} color="#356C9B" className="mx-6" />
          </AnimationIcon>
          <AnimationIcon position="30vw" inView={inView}>
            <SiTailwindcss size={60} color="#0DAFCD" className="my-6" />
          </AnimationIcon>
          <AnimationIcon position="30vw" inView={inView}>
            <SiFlutter size={60} color="#21C5FD" className="-m-10" />
          </AnimationIcon>
        </div>
        <div className="flex-grow z-10">
          <img src={ExpBG} alt="ExpBG" width={500} className="mx-auto" />
        </div>
        <div className="basis-1/4">
          <div className="basis-1/4 grid grid-cols-3 gap-20">
            <AnimationIcon position="-30vw" inView={inView}>
              <FaNodeJs size={60} color="#7EC728" className="m-3" />
            </AnimationIcon>
            <AnimationIcon position="-30vw" inView={inView}>
              <SiPhp size={60} color="#7277AD" className="-my-8" />
            </AnimationIcon>
            <AnimationIcon position="-30vw" inView={inView}>
              <SiCodeigniter size={60} color="#F04221" />
            </AnimationIcon>
            <AnimationIcon position="-30vw" inView={inView}>
              <SiMongodb size={60} color="#3B813C" />
            </AnimationIcon>
            <AnimationIcon position="-30vw" inView={inView}>
              <SiMysql size={60} color="#035D85" className="-my-10" />
            </AnimationIcon>
            <AnimationIcon position="-30vw" inView={inView}>
              <SiPython size={60} color="#356B9B" />
            </AnimationIcon>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
