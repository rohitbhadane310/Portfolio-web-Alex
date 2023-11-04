import React from "react";
import SkillCard from "../layouts/SkillCard";

const About = () => {
  const skill1 = "w-11/12";
  const skill2 = "w-4/5";
  const skill3 = "w-2/3";

  return (
    <div className=" min-h-screen flex flex-col justify-center gap-8 lg:px-32 px-5 bg-backgroundColor">
      <h1 className=" text-4xl font-semibold text-center mt-10">About Me</h1>

      <div>
        <h2 className=" text-3xl font-semibold">I'm Alex Anderson</h2>
        <p className=" mt-2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Reprehenderit officia quod sint consequuntur cupiditate sed iste
          impedit asperiores quibusdam soluta.
        </p>
      </div>

      <div>
        <h2 className=" text-3xl font-semibold">My Skills</h2>

        <div>
          <SkillCard title="Html" width={skill1} val="95%" />
          <SkillCard title="CSS" width={skill2} val="85%" />
          <SkillCard title="JavaScript" width={skill3} val="70%" />
        </div>
      </div>
    </div>
  );
};

export default About;
