import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { MdWork } from "react-icons/md";
import Title from "../shared/Title";

const Work = () => {
  return (
    <>
      <Title title="Experience" subtitle="- Work -" />
      <div className="pb-6">
        <VerticalTimeline animate={true} lineColor="#ffd2af">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "rgb(39, 111, 107, 0.4)",
              color: "#333",
            }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(39, 111, 107)" }}
            date="March 2022 - present"
            iconStyle={{ background: "rgb(39, 111, 107)", color: "#fff" }}
            icon={<MdWork />}
          >
            <h3 className="vertical-timeline-element-title">IT Analyst</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Tata Consultancy Services
            </h4>
            <p>Frontend React JS application developer</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jun 2019 - Feb 2022"
            iconStyle={{ background: "rgb(39, 111, 107)", color: "#fff" }}
            icon={<MdWork />}
          >
            <h3 className="vertical-timeline-element-title">Team Leader</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Ticvic Technologies
            </h4>
            <p>Team Lead Full-Stack Web And Mobile Application Development</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Nov 2017 - Jun 2019"
            iconStyle={{ background: "rgb(39, 111, 107)", color: "#fff" }}
            icon={<MdWork />}
          >
            <h3 className="vertical-timeline-element-title">
              Senior Software Engineer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Ecrubit Consultancy Services Private Limited
            </h4>
            <p>
              Full-Stack Developer: Codeigniter Restful API, Web, Mobile App
              Development And Handling Databases Complex Queries
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Sep 2016 - Sep 2017"
            iconStyle={{ background: "rgb(39, 111, 107)", color: "#fff" }}
            icon={<MdWork />}
          >
            <h3 className="vertical-timeline-element-title">
              Software Trainee
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Askan Technologies
            </h4>
            <p>PHP Codeigniter And Wordpress Developer</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Work;
