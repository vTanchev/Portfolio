import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ComputerIcon from "@mui/icons-material/Computer";
import ContactMailIcon from "@mui/icons-material/ContactMail";

export const NavLinksData = [
  {
    label: "Home",
    pathname: "#",
    value: 0,
    icon: <HomeIcon />,
  },
  {
    label: "About",
    pathname: "#about",
    value: 1,
    icon: <InfoIcon />,
  },

  {
    label: "Projects",
    pathname: "#projects",
    value: 3,
    icon: <ComputerIcon />,
  },
  {
    label: "Contact",
    pathname: "#contact",
    value: 4,
    icon: <ContactMailIcon />,
  },
];
