import React from "react";

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
  return (
    <Card style={{ padding: "20px 5px" }}>
      <CardContent>
        <form onSubmit="submit">
          <Grid container spacing={1}>
            <Grid xs={12} sm={6} item>
              <TextField
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
                label="Message"
                multiline
                rows={5}
                placeholder="Type your message"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid xs={12} item>
              <StyledButtonSubmit
                type="submit"
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
