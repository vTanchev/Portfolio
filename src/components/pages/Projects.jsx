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

const StyledDiv = styled("div")({});

const Projects = () => {
  return (
    <StyledDiv id="projects">
      <Container>
        <Typography variant="h5" paddingTop="40px">
          Projects
        </Typography>
        <Grid container spacing={1}>
          {projectsData.map((card) => (
            <Grid xs={12} sm={6} item>
              <Card sx={{ maxWidth: 445 }}>
                <CardMedia
                  component="img"
                  alt={card.title}
                  height="140"
                  image={card.screenshot}
                />
                <CardContent>
                  <Typography gutterBottom variant="body1" component="div">
                    {card.title}
                  </Typography>
                  <Typography variant="body2" color="secondary.main">
                    {card.tools}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button LinkComponent={"a"} href={card.linkDemo} size="small">
                    Live Demo
                  </Button>
                  <Button
                    LinkComponent={"a"}
                    href={card.githubLink}
                    size="small"
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
