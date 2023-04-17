import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      se: 200,
      xr: 300,
      s8: 360,
      ip: 380,
      sa: 400,
      xr1: 414,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: "#9FD3C7",
    },
    secondary: {
      main: "#050505",
    },
  },

  typography: {
    h4: {
      fontFamily: '"Exo 2", sans-serif',
      fontWeight: "bold",
      fontSize: "62px",
      textTransform: "uppercase",
    },
    h6: {
      fontWeight: 400,
    },
    h5: {
      fontFamily: '"Exo 2", sans-serif',
      fontWeight: "bold",
      fontSize: "42px",
      textTransform: "uppercase",
      marginBottom: "20px",
    },
    body1: {
      marginBottom: "10px",
    },
    tab: {
      color: "#050505",
      fontWeight: 700,
      textTransform: "none",
    },
  },
});
