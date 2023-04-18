import React from "react";

import { Box, Button, Container, Typography } from "@mui/material";
import styled from "@emotion/styled";

import { BsLinkedin, BsTwitter, BsGithub } from "react-icons/bs";

const StyledBox = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    paddingBottom: "10px ",
  },
}));

const StyledContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  height: "60px",
  marginTop: "20px",

  [theme.breakpoints.down("md")]: {
    display: "flex",
    flexDirection: "column-reverse",
  },
}));

const Footer = () => {
  return (
    <>
      <StyledContainer>
        <Typography variant="body2" fontSize={16}>
          © Vasko Tanchev 2023
        </Typography>
        <StyledBox>
          <Button
            LinkComponent={"a"}
            href="https://www.linkedin.com/in/vasko-tanchev/"
            target="_blank"
          >
            <BsLinkedin size={24} />
          </Button>
          <Button
            LinkComponent={"a"}
            href="https://github.com/vTanchev"
            target="_blank"
          >
            <BsGithub size={24} />
          </Button>
          <Button
            LinkComponent={"a"}
            href="https://twitter.com/xin0w"
            target="_blank"
          >
            <BsTwitter size={24} />
          </Button>
        </StyledBox>
      </StyledContainer>
    </>
  );
};

export default Footer;
