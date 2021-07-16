import { createTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createTheme({
  typography: {
    fontFamily: 'Raleway',
  },
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: '#7a7a7a',
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;
