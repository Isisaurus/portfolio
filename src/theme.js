import { createTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createTheme({
  typography: {
    fontFamily: 'Raleway',
    button: {
      fontWeight: 700,
      textTransform: 'none',
    },
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 500,
    },
    h6: {
      fontWeight: 500,
      textTransform: 'uppercase',
      letterSpacing: '.1em',
    },
  },
  palette: {
    primary: {
      light: '#E4E4FF',
      main: '#4544BD',
    },
    secondary: {
      main: '#939393',
    },
    text: {
      primary: '#333333',
      secondary: '#939393',
    },
  },
  shape: {
    borderRadius: 0,
  },
});

export default theme;
