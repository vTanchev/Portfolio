import React, { useState } from "react";
// import { useLocation } from "react-router-dom";

// import NavLinksData from "../../../data/NavLinksData";

import { Tab, Tabs } from "@mui/material";
import styled from "@emotion/styled";

const StyledTab = styled(Tab)(({ theme }) => ({
  ...theme.typography.tab,
  backgroundColor: "secondary.main",
  // hover efekt
  "&:hover": {},
}));

const NavLinksData = [
  {
    label: "Home",
    pathname: "#",
    value: 0,
  },
  {
    label: "About",
    pathname: "#about",
    value: 1,
  },

  {
    label: "Projects",
    pathname: "#projects",
    value: 2,
  },
  {
    label: "Contact",
    pathname: "#contact",
    value: 3,
  },
];

const NavigationLinks = () => {
  const [value, setValue] = useState(0);

  // const location = useLocation();
  // const path = location.pathname;

  // const handleChange = (e, value) => {
  //   setValue(value);
  // };

  // useEffect(() => {
  //   if (path === "#" && value !== 0) {
  //     setValue(0);
  //   } else if (path === "#about" && value !== 1) {
  //     setValue(1);
  //   } else if (path === "#skills" && value !== 2) {
  //     setValue(2);
  //   } else if (path === "#projects" && value !== 3) {
  //     setValue(3);
  //   } else if (path === "#contact" && value !== 4) {
  //     setValue(4);
  //   }
  // }, [value]);

  return (
    <Tabs
      value={value}
      indicatorColor="none"
      textColor="secondary"
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      {NavLinksData.map((navlink) => (
        <StyledTab
          key={navlink.value}
          label={navlink.label}
          LinkComponent="a"
          href={navlink.pathname}
          value={navlink.value}
        />
      ))}
    </Tabs>
  );
};

export default NavigationLinks;
