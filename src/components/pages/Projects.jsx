import React from "react";

import { projectsData } from "../../data/ProjectsData";

import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import styled from "@emotion/styled";

const StyledDiv = styled("div")(({ theme }) => ({}));
const StyledLink = styled(Button)(({ theme }) => ({
  padding: "0",
}));

const Projects = () => {
  return (
    <StyledDiv id="projects">
      <Container>
        <Typography variant="h5" paddingTop="50px">
          Projects
        </Typography>
        <Grid container spacing={3}>
          {projectsData.map((project) => (
            <Grid xs={12} sm={4} item key={project.title}>
              <Card sx={{ maxWidth: 445 }}>
                <StyledLink LinkComponent={"a"} href={project.linkDemo}>
                  <CardMedia
                    component="img"
                    alt={project.title}
                    height="260"
                    image={project.screenshot}
                  />
                </StyledLink>
                <CardContent>
                  <Typography gutterBottom variant="cardTitle" component="div">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="secondary.main">
                    Built with:{" "}
                    {project.tools.map((tool) => tool.replaceAll(",", " "))}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    LinkComponent={"a"}
                    href={project.linkDemo}
                    size="medium"
                    variant="outlined"
                  >
                    Live Demo
                  </Button>
                  <Button
                    LinkComponent={"a"}
                    href={project.githubLink}
                    size="medium"
                    variant="outlined"
                  >
                    Github Code
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </StyledDiv>
  );
};

export default Projects;
