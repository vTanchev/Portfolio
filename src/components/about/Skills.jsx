import React from "react";

import { skillsData } from "../../data/SkillsData";

import { Button } from "@mui/material";
import styled from "@emotion/styled";

const StyledToolDiv = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("xr")]: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gridTemplateRows: "repeat(3,1fr)",
    gridColumnGap: "2px",
    gridRowGap: "4px",
  },
  [theme.breakpoints.up("sm")]: {
    display: "grid",
    gridTemplateColumns: "repeat(6, 1fr)",
    gridTemplateRows: "repeat(2,1fr)",
    gridColumnGap: "2px",
    gridRowGap: "4px",
  },
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
}));

const Skills = () => {
  return (
    <StyledToolDiv>
      {skillsData.map((item, i) => (
        <Button
          key={i}
          disableElevation
          disableRipple
          variant="outlined"
          sx={{
            padding: "6px 20px",
            color: "#000",
            mx: "4px",
            cursor: "default",
          }}
        >
          {item.icon}
        </Button>
      ))}
    </StyledToolDiv>
  );
};

export default Skills;
