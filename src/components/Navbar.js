import React from 'react';
import { Link } from 'gatsby-theme-material-ui';

import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core';

import Logo from './Logo';

const useStyles = makeStyles(theme => ({
  AppBar: {
    boxShadow: 'none',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '0 1.5rem',

    [theme.breakpoints.down('xs')]: {
      padding: '0 .5rem',
    },
    [theme.breakpoints.up('xl')]: {
      padding: '0 10vw',
    },
  },
  Toolbar: {
    marginLeft: 'auto',
    padding: '0',

    [theme.breakpoints.down('xs')]: {
      flex: '1',
      justifyContent: 'space-around',
    },
  },
  link: {
    textDecoration: 'none',
    paddingBottom: '0.5em',
    marginLeft: '3.5em',
    color: 'inherit',
    position: 'relative',
    fontWeight: 500,

    [theme.breakpoints.down('sm')]: {
      marginLeft: '1.5em',
    },
    [theme.breakpoints.down('xs')]: {
      marginLeft: '0',
    },

    '&::after': {
      content: '" "',
      position: 'absolute',
      bottom: '0',
      left: '0',
      display: 'block',
      height: '3px',
      width: '0',
      backgroundColor: theme.palette.primary.light,
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
    color: theme.palette.text.secondary,
    fontWeight: 600,
    '&::after': {
      content: '" "',
      position: 'absolute',
      bottom: '0',
      left: '0',
      display: 'block',
      height: '3px',
      width: '50%',
      backgroundColor: theme.palette.primary.light,
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
  },
  navItem: {
    fontSize: '1rem',
    fontWeight: 'inherit',

    [theme.breakpoints.down('xs')]: {
      fontSize: '.8rem',
    },
  },
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar
      component="nav"
      position="static"
      className={classes.AppBar}
      color="transparent"
    >
      <Logo />
      <Toolbar className={classes.Toolbar}>
        <Link to="/" className={classes.link} activeClassName={classes.active}>
          <Typography
            variant="h6"
            component="span"
            className={classes.navItem}
            color="textPrimary"
          >
            Projects
          </Typography>
        </Link>

        <Link
          to="/about"
          className={classes.link}
          activeClassName={classes.active}
        >
          <Typography
            variant="h6"
            component="span"
            className={classes.navItem}
            color="textPrimary"
          >
            About
          </Typography>
        </Link>

        <Link
          to="/contact"
          className={classes.link}
          activeClassName={classes.active}
        >
          <Typography
            variant="h6"
            component="span"
            className={classes.navItem}
            color="textPrimary"
          >
            Contact
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
