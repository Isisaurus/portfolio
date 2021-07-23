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
    h4: {
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '.2em',
      lineHeight: 1.5,
    },
    h5: {
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '.1em',
      lineHeight: 1.5,
    },
    h6: {
      fontWeight: 500,
      textTransform: 'uppercase',
      letterSpacing: '.1em',
    },
    body1: {
      fontWeight: 500,
    },
    body2: {
      fontWeight: 500,
    },
  },
  palette: {
    primary: {
      light: '#B2B1FF',
      main: '#6B6AB8',
    },
    secondary: {
      main: '#939393',
    },
    text: {
      primary: '#595959',
      secondary: '#757575',
    },
  },
  shape: {
    borderRadius: 0,
  },
});

export default theme;
