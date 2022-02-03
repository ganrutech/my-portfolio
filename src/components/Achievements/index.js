import React from "react";
import Title from "../../components/shared/Title";

const Achievements = () => {
  return (
    <div id="achievements" className="w-full">
      <Title title="Achievements" />
      <video autoPlay muted loop className="w-full h-[500px] object-cover">
        <source
          src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default Achievements;
