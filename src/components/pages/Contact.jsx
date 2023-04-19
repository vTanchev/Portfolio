import React from "react";

import Form from "../contact/Form";

import { Container, Typography } from "@mui/material";
import styled from "@emotion/styled";

const StyledDiv = styled("div")({});

const Contact = () => {
  return (
    <StyledDiv id="contact">
      <Container>
        <Typography variant="h5" paddingTop="40px">
          Contact
        </Typography>
        <Typography variant="body1">
          Feel free to Contact me by submitting the form below and I will get
          back to you as soon as possible
        </Typography>
        <Form />
      </Container>
    </StyledDiv>
  );
};

export default Contact;
