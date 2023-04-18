import React from "react";

import Form from "../contact/Form";

import { Container, Typography } from "@mui/material";

const Contact = () => {
  return (
    <React.Fragment>
      <Container id="contact">
        <Typography variant="h5">Contact</Typography>
        <Typography variant="body1">
          Feel free to Contact me by submitting the form below and I will get
          back to you as soon as possible
        </Typography>
        <Form />
      </Container>
    </React.Fragment>
  );
};

export default Contact;
