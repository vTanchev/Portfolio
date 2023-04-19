import React from "react";

import styled from "@emotion/styled";

import resume from "../../files/CV.pdf";

import { Button, Container, Typography } from "@mui/material";
import Skills from "../about/Skills";

const StyledButtonSubmit = styled(Button)(({ theme }) => ({
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
  },
  [theme.breakpoints.down("sm")]: {
    width: "50%",
  },
}));

const About = () => {
  return (
    <React.Fragment>
      <Container>
        <Typography variant="h5" paddingTop="60px" id="about">
          About
        </Typography>
        <Typography variant="body1">
          I’m Vasko Tanchev, a Frontend Developer with expertise in React.js and
          Node.js as my back-end. I love building user-friendly and efficient
          web applications, and I am constantly expanding my skills through
          various projects.
        </Typography>
        <Typography variant="body1">
          My forte is creating dynamic user interfaces with reusable components.
          I always strive to refine my code and streamline my workflow to
          improve efficiency. My experience with Node.js as a backend technology
          has made me capable of delivering exceptional results as a junior
          React.js developer.
        </Typography>
        <Typography variant="body1">
          I am a quick learner who always seeks help when necessary. In a
          fast-paced industry like web development, I recognize the importance
          of being flexible, and I’m always adapting to change. I also enjoy
          collaborating with people from diverse backgrounds and cultures, as I
          believe it leads to better ideas and more innovation.
        </Typography>
        <Typography variant="body1">
          If you’re searching for a junior React.js developer who is
          enthusiastic, hard-working, and committed to delivering exceptional
          results, I would love to connect with you and discuss how I can
          contribute to your team.
        </Typography>
        <StyledButtonSubmit
          variant="contained"
          LinkComponent={"a"}
          href={resume}
          download="Resume"
          disableElevation
          sx={{ padding: "6px 30px", textTransform: "uppercase" }}
        >
          Resume
        </StyledButtonSubmit>

        <>
          <Typography variant="h6" fontSize={20} marginTop="10px">
            Tools & Technologies
          </Typography>

          <>
            <Skills />
          </>
        </>
      </Container>
    </React.Fragment>
  );
};

export default About;
