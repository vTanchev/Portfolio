import React from "react";
// import { Link } from "react-router-dom";

import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
} from "@mui/material";

import styled from "@emotion/styled";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ComputerIcon from "@mui/icons-material/Computer";
import ContactMailIcon from "@mui/icons-material/ContactMail";

const heightMenu = 64;

const SideMenu = ({ isOpenMenu, setIsOpenMenu }) => {
  const handlerOpenMenu = () => {
    setIsOpenMenu((prevState) => !prevState);
  };

  const closeMenu = () => {
    setIsOpenMenu((prevState) => !prevState);
  };

  const DrawerStyled = styled(SwipeableDrawer)({
    "&.MuiDrawer-root >.MuiDrawer-paper": {
      position: "fixed",
      top: `${heightMenu}px`,
      width: "206px",
      height: `calc(100vh - ${heightMenu}px)`,
      backgroundColor: "rgba(255, 255, 255, 0.62)",
      boxShadow: ` 0 8px 32px 0 rgba( 31, 38, 135, 0.17 )`,
      backdropFilter: `blur( 6px )`,
      border: `1px solid rgba( 255, 255, 255, 0.1 )`,
      webkitBackdropFilter: `blur( 5px )`,
    },
  });

  return (
    <>
      <DrawerStyled
        BackdropProps={{ invisible: true }}
        anchor="right"
        open={isOpenMenu}
        onClose={handlerOpenMenu}
        onOpen={handlerOpenMenu}
      >
        <List component="nav">
          <ListItemButton LinkComponent="a" href="#" onClick={closeMenu}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText>HOME</ListItemText>
          </ListItemButton>
          <ListItemButton LinkComponent="a" href="#about" onClick={closeMenu}>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText>ABOUT</ListItemText>
          </ListItemButton>

          <ListItemButton
            LinkComponent="a"
            href="#projects"
            onClick={closeMenu}
          >
            <ListItemIcon>
              <ComputerIcon />
            </ListItemIcon>
            <ListItemText>PROJECTS</ListItemText>
          </ListItemButton>
          <ListItemButton LinkComponent="a" href="#contact" onClick={closeMenu}>
            <ListItemIcon>
              <ContactMailIcon />
            </ListItemIcon>
            <ListItemText>CONTACT</ListItemText>
          </ListItemButton>
        </List>
      </DrawerStyled>
    </>
  );
};

export default SideMenu;
