import React from "react";
import { Link } from "react-router-dom";

import {
  Drawer,
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
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import ContactMailIcon from "@mui/icons-material/ContactMail";

const SideMenu = ({ isOpenMenu, setIsOpenMenu }) => {
  const handlerOpenMenu = () => {
    setIsOpenMenu((prevState) => !prevState);
  };

  const closeMenu = () => {
    setIsOpenMenu((prevState) => !prevState);
  };

  const heightMenu = 64;

  const DrawerStyled = styled(SwipeableDrawer)({
    "&.MuiDrawer-root >.MuiDrawer-paper": {
      position: "fixed",
      top: `${heightMenu}px`,
      width: "240px",
      height: `calc(100vh - ${heightMenu}px)`,
      backgroundColor: "rgba(255, 255, 255, 0.35)",
      boxShadow: ` 0 8px 32px 0 rgba( 31, 38, 135, 0.37 )`,
      backdropFilter: `blur( 5px )`,

      border: `1px solid rgba( 255, 255, 255, 0.11 )`,
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
          <ListItemButton LinkComponent={Link} to={"/"} onClick={closeMenu}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText>HOME</ListItemText>
          </ListItemButton>
          <ListItemButton
            LinkComponent={Link}
            to={"/about"}
            onClick={closeMenu}
          >
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText>ABOUT</ListItemText>
          </ListItemButton>
          <ListItemButton
            LinkComponent={Link}
            to={"/skills"}
            onClick={closeMenu}
          >
            <ListItemIcon>
              <HelpCenterIcon />
            </ListItemIcon>
            <ListItemText>SKILLS</ListItemText>
          </ListItemButton>
          <ListItemButton
            LinkComponent={Link}
            to={"/projects"}
            onClick={closeMenu}
          >
            <ListItemIcon>
              <ComputerIcon />
            </ListItemIcon>
            <ListItemText>PROJECTS</ListItemText>
          </ListItemButton>
          <ListItemButton
            LinkComponent={Link}
            to={"/contact"}
            onClick={closeMenu}
          >
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
