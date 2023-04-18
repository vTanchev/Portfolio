import React from "react";

import resume from "../../files/CV.pdf";

import { Button, Container, Typography } from "@mui/material";

const About = () => {
  return (
    <React.Fragment>
      <Container>
        <Typography variant="h5" paddingTop="50px" id="about">
          About
        </Typography>
        <Typography variant="body1">
          Hello, I’m Vasko, a junior React.js developer with a strong passion
          for building web applications that are both user-friendly and
          efficient.
        </Typography>
        <Typography variant="body1">
          I'm an enthusiast about technology, especially React.js. As a junior
          developer, I have a solid foundation in HTML, CSS, JavaScript, and
          React. I am likewise familiar with Node.js. I keep expanding my skills
          and knowledge through the many projects I have built.
        </Typography>
        <Typography variant="body1">
          What I enjoy most when working with React is its ability to create
          dynamic user interfaces with reusable components. I strive to refine
          my code and streamline my workflow.
        </Typography>
        <Typography variant="body1">
          Being a quick learner, asking questions, and seeking help when
          necessary are integral parts of my problem-solving approach. I am
          accustomed to adapting to change and recognize how important is to be
          flexible in a dynamic and fast-paced industry, such as web
          development.
        </Typography>
        <Typography variant="body1">
          I enjoy working with people from different backgrounds and cultures,
          and I believe that a diverse team leads to better ideas and more
          innovation.
        </Typography>
        <Typography variant="body1">
          Are you’re looking for a junior React.js developer who is
          enthusiastic, hard-working, and committed to delivering exceptional
          results? let’s connect and discuss how I can contribute to your team.
        </Typography>
        <>
          <Typography variant="h6">Skills</Typography>
        </>

        <Button
          variant="contained"
          LinkComponent={"a"}
          href={resume}
          download="Resume"
          sx={{ padding: "6px 30px", textTransform: "uppercase" }}
        >
          Resume
        </Button>
      </Container>
    </React.Fragment>
  );
};

export default About;
