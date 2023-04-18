import React from "react";
// import { Link } from "react-router-dom";
import { NavLinksData } from "../../../data/NavLinksData";

import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
} from "@mui/material";

import styled from "@emotion/styled";

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
          {NavLinksData.map((navLink) => (
            <ListItemButton
              LinkComponent="a"
              href={navLink.pathname}
              onClick={closeMenu}
            >
              <ListItemIcon>{navLink.icon}</ListItemIcon>
              <ListItemText>{navLink.label}</ListItemText>
            </ListItemButton>
          ))}
        </List>
      </DrawerStyled>
    </>
  );
};

export default SideMenu;
