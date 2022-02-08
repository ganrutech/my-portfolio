import React from "react";
import Title from "../../components/shared/Title";

import AwardVideo from "../../assets/videos/award.mp4";

const Achievements = () => {
  return (
    <div id="achievements" className="w-full">
      <Title title="Achievements" />
      <video autoPlay muted loop className="w-full max-h-[90vh]  object-cover">
        <source src={AwardVideo} type="video/mp4" />
      </video>
    </div>
  );
};

export default Achievements;
