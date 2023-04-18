import React from "react";

import { skillsData } from "../../data/SkillsData";
import { Button } from "@mui/material";

const Skills = () => {
  return (
    <>
      {skillsData.map((item) => (
        <Button>{item.icon}</Button>
      ))}
    </>
  );
};

export default Skills;
