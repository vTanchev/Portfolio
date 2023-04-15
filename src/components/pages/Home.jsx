import React from "react";

import { Box, Container, Typography, Button } from "@mui/material";

const Home = () => {
  return (
    <>
      <Container maxWidth="xxl">
        <Box>
          <Typography c>Hi, my name is</Typography>
          <Typography>VASKO TANCHEV</Typography>
          <Typography>Frontend Developer</Typography>
          <Button>GET IN TOUCH</Button>
        </Box>
      </Container>
    </>
  );
};

export default Home;
