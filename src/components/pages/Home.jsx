import React from "react";
// import { Link } from "react-router-dom";

import { Box, Container, Typography, Button } from "@mui/material";
import styled from "@emotion/styled";

import homeImg from "../../assets/vt-transparent.png";

const navHeight = 64;

// home section
const StyledSectionHome = styled("section")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,

  [theme.breakpoints.up("sm")]: {
    height: `calc(100vh - ${navHeight}px)`,
  },
  [theme.breakpoints.up("lg")]: {
    height: `calc(100vh - ${navHeight}px)`,
  },
  [theme.breakpoints.up("xl")]: {
    height: `calc(80vh - ${navHeight}px)`,
  },
}));

// home container
const StyledContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",

  [theme.breakpoints.down("md")]: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

// typography container
const StyledBox = styled(Box)(({ theme }) => ({
  alignSelf: "center",
  // Galaxy Fond
  [theme.breakpoints.up("se")]: {
    paddingTop: "50px",
  },
  // iphone12  390px
  [theme.breakpoints.up("xr")]: {
    paddingTop: "50px",
  },
  // samsung S8  360px
  [theme.breakpoints.only("s8")]: {
    paddingTop: "30px",
  },
  // samsung S20  412px
  [theme.breakpoints.up("sa")]: {
    paddingTop: "64px",
  },
  [theme.breakpoints.up("md")]: {
    paddingTop: "10px",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  width: "160px",
  height: "50px",
  marginTop: "10px",
  padding: "0 20px 0 20px",
  color: theme.palette.secondary.main,
  fontWeight: 500,
  border: `1px solid ${theme.palette.secondary.main}`,
  "&:hover": {
    border: `1px solid ${theme.palette.secondary.main}`,
  },
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

// img div
const StyledDiv = styled("div")(({ theme }) => ({
  opacity: 0.75,
  width: "500px",
  // Galaxy Fond
  [theme.breakpoints.up("se")]: {
    paddingTop: "40px",
    height: "220px",
    maxWidth: "260px",
  },
  // iphone12  390px
  [theme.breakpoints.up("xr")]: {
    paddingTop: "50px",
    height: "350px",
    maxWidth: "350px",
  },
  // samsung S8  360px
  [theme.breakpoints.only("s8")]: {
    paddingTop: "10px",
    height: "326px",
    maxWidth: "320px",
  },
  // iphones  390px
  [theme.breakpoints.only("ip")]: {
    paddingTop: "30px",
    height: "370px",
    maxWidth: "370px",
  },
  // samsung S20  412px
  [theme.breakpoints.up("sa")]: {
    paddingTop: "44px",
    height: "390px",
    maxWidth: "390px",
  },
  // samsung S20  414px
  [theme.breakpoints.up("xr1")]: {
    paddingTop: "40px",
    height: "380px",
    maxWidth: "380px",
  },
  // small
  [theme.breakpoints.up("sm")]: {
    padding: "4px",
    height: "322px",
    maxWidth: "initial",
  },
  // medium
  [theme.breakpoints.up("md")]: {
    padding: 0,
    height: "540px",
    maxWidth: "initial",
  },
  // large
  [theme.breakpoints.up("lg")]: {
    padding: "50px",
    height: "510px",
    maxWidth: "initial",
  },
  [theme.breakpoints.up("xl")]: {
    padding: "86px",
    height: "600px",
    width: "600px",
    maxWidth: "initial",
  },
}));

const StyledImg = styled("img")(() => ({
  height: "100%",
  width: "100%",
}));

const Home = () => {
  return (
    <StyledSectionHome>
      <StyledContainer maxWidth="xxl">
        <StyledBox>
          <Typography variant="h6" component="h6" fontSize={{ se: "16px" }}>
            Hi, my name is
          </Typography>
          <Typography
            variant="h4"
            fontSize={{
              se: "30px",
              xr: "40px",
              sa: "46px",
              md: "60px",
            }}
          >
            Vasko Tanchev
          </Typography>
          <Typography variant="h6" fontSize={{ se: "16px" }}>
            Frontend Developer
          </Typography>
          <StyledButton
            disableRipple
            LinkComponent="a"
            href="#contact"
            variant="outlined"
          >
            GET IN TOUCH
          </StyledButton>
        </StyledBox>
        <StyledDiv>
          <StyledImg src={homeImg} alt="vt" />
        </StyledDiv>
      </StyledContainer>
    </StyledSectionHome>
  );
};

export default Home;
