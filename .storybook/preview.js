import React from "react";
import { CssBaseline, ThemeProvider as MuiThemeProvider } from "@mui/material";
import { theme } from '../src/styles/theme'
import { addDecorator } from "@storybook/react";
import { ThemeProvider } from "@emotion/react";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

addDecorator((story) => (
  <MuiThemeProvider theme={theme}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {story()}
    </ThemeProvider>
  </MuiThemeProvider>
));
