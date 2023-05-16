import { createTheme } from '@mui/material';

import {
  rootButtonStyle,
  outlinedButtonStyle,
  containedButtonStyle,
  labelStyle,
  textFieldStyle,
  inputStyle,
  svgIconStyle,
  dropMenuStyle,
  menuItemStyle
} from './themeOptions';

export const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: rootButtonStyle,
        outlined: outlinedButtonStyle,
        contained: containedButtonStyle
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: labelStyle
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: textFieldStyle
      }
    },
    MuiInput: {
      styleOverrides: {
        root: inputStyle
      }
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: svgIconStyle
      }
    },
    MuiPaper: {
      styleOverrides: {
        elevation8: dropMenuStyle
      }
    },
    MuiMenuItem: {
      styleOverrides: {
        root: menuItemStyle
      }
    }
  }
});
