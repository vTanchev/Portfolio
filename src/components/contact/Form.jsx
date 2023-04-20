import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import { Button, Card, CardContent, Grid, TextField } from "@mui/material";
import styled from "@emotion/styled";

const StyledButtonSubmit = styled(Button)(({ theme }) => ({
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
  },
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_njhirjc",
        "template_if82lcx",
        form.current,
        "lsMpFcW1V1-nXHtYi"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Card style={{ padding: "20px 5px" }}>
      <CardContent>
        <form ref={form} onSubmit={sendEmail}>
          <Grid container spacing={1}>
            <Grid xs={12} sm={6} item>
              <TextField
                name="user_name"
                label="First Name"
                placeholder="Enter first name"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid xs={12} sm={6} item>
              <TextField
                label="Last Name"
                placeholder="Enter last name"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid xs={12} item>
              <TextField
                name="user_email"
                label="Email"
                placeholder="Enter email"
                variant="outlined"
                type="email"
                fullWidth
                required
              />
            </Grid>
            <Grid xs={12} item>
              <TextField
                name="message"
                label="Message"
                multiline
                rows={5}
                placeholder="Type your message"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid xs={12} sm={3} item>
              <StyledButtonSubmit
                type="submit"
                value="Send"
                variant="contained"
                fullWidth
                disableElevation
              >
                Submit
              </StyledButtonSubmit>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
};

export default Form;
