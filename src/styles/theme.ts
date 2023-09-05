import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

export const Colors = {
  AZUL_GOV: "#034EA2",
  AMARELO_GOV: "#FDB913",
  VERMELHO_GOV: "#EF4123",
  VERDE_GOV: "#007932",
};

export const theme = createTheme({
  palette: {
    primary: {
      main: Colors.AZUL_GOV,
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: [
      "Montserrat",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: "14px",
          background: "#FFFFFF",
          borderWidth: 1,
          borderColor: "#ECEEF4",
          boxShadow: "none",
        },
      },
    },
  },
});
