import React, { useState } from "react";
// import { Link } from "react-router-dom";

import { AppBar, Box, Button, Toolbar } from "@mui/material";
import styled from "@emotion/styled";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import SideMenu from "./SideMenu";
import NavigationLinks from "./NavigationLinks";

import logo from "../../../assets/logo.svg";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

// koga ode nad 600width uste stoe sideNav

// const StyledSideMenu = styled("div")(({ theme }) => ({
//   display: "flex",
//   alignItems: "center",
//   gap: "10px",
//   [theme.breakpoints.down("md")]: {
//     display: "none",
//   },
// }));

const Navbar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handlerHamburgerOpen = () => {
    setIsOpenMenu((prevState) => !prevState);
  };

  const openMenu = !isOpenMenu ? (
    <MenuIcon
      onClick={handlerHamburgerOpen}
      sx={{ width: "40px", height: "40px" }}
    />
  ) : (
    <CloseIcon
      width={30}
      height={30}
      onClick={handlerHamburgerOpen}
      sx={{ width: "40px", height: "40px" }}
    />
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          height: "64px",
          backgroundColor: "primary.main",
        }}
      >
        <StyledToolbar>
          <Button disableRipple LinkComponent="a" href="#" sx={{ padding: 0 }}>
            <img src={logo} width={40} height={40} alt="logo" />
          </Button>
          <NavigationLinks />
          <UserBox>{openMenu}</UserBox>
        </StyledToolbar>
      </AppBar>

      <SideMenu isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} />
    </>
  );
};

export default Navbar;
