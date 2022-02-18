import {createTheme} from "@mui/material";

export const themeOptions = {
  palette: {
    type: "light",
    primary: {
      main: "#e91e5e",
    },
    secondary: {
      main: "#6600f5",
    },
  },
  shape: {
    borderRadius: 4,
  },
  typography: {
    fontSize: "10rem",
    body1: {
      fontFamily: "Raleway",
    },
    h1: {
      fontSize: "2.2rem",
    },
  },
};

const theme = createTheme(themeOptions);

export default theme;
