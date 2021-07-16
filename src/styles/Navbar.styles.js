// styles for the navigation bar

import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
  AppBar: {
    boxShadow: 'none',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '1rem 0',
    width: '95%',
    margin: '0 auto',
  },
  Toolbar: {
    marginLeft: 'auto',
    padding: '0',
  },
  link: {
    textDecoration: 'none',
    padding: '.8em 1.5rem',
    color: 'inherit',
    '&:hover': {
      textDecoration: 'none',
    },
  },
}));
