import darkScrollbar from "@mui/material/darkScrollbar";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          ...darkScrollbar(),
          backgroundColor: '#0f0a25',
          height: '100vh',
        },
        '#root': {
          height: '100%',
        }
      }
    }
  }
});

export { theme };
