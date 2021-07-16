import useStyles from './../styles/Navbar.styles';

import React from 'react';
import { Link } from 'gatsby-theme-material-ui';

import { AppBar, Toolbar, Typography } from '@material-ui/core';

import Logo from './Logo';

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
          <Typography variant="h6" component="span">
            Projects
          </Typography>
        </Link>

        <Link
          to="/about"
          className={classes.link}
          activeClassName={classes.active}
        >
          <Typography variant="h6" component="span">
            About
          </Typography>
        </Link>

        <Link
          to="/contact"
          className={classes.link}
          activeClassName={classes.active}
        >
          <Typography variant="h6" component="span">
            Contact
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
