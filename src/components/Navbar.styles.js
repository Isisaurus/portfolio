// styles for the navigation bar

import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
  AppBar: {
    boxShadow: 'none',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '.5rem 2rem',
  },
  Toolbar: {
    marginLeft: 'auto',
    padding: '0',
  },
  link: {
    textDecoration: 'none',
    padding: '.8em 0',
    marginLeft: '3.5em',
    color: 'inherit',
    position: 'relative',
    '&::after': {
      content: '" "',
      position: 'absolute',
      bottom: '0',
      left: '0',
      display: 'block',
      height: '5px',
      width: '0',
      backgroundColor: theme.palette.text.primary,
      transition: 'all 0.3s ease',
    },
    '&:hover': {
      textDecoration: 'none',
      '&::after': {
        width: '100%',
        transition: 'all 0.3s ease',
      },
      transition: 'all 0.3s ease',
    },
    '&:active': {
      '&::after': {
        width: '100%',
      },
      transition: 'all 0.3s ease',
    },
  },
  active: {
    color: theme.palette.primary.main,
    '&::after': {
      content: '" "',
      position: 'absolute',
      bottom: '0',
      left: '0',
      display: 'block',
      height: '5px',
      width: '50%',
      backgroundColor: theme.palette.text.primary,
      transition: 'all 0.3s ease',
    },
  },
}));
