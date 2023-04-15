import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    secondary: {
      main: "#FFF",
    },
  },

  typography: {
    tab: {
      color: "#FFF",
      fontWeight: 700,
      textTransform: "none",
    },
  },
});
