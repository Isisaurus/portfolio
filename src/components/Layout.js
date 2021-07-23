import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
import { Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'row-reverse',
    minHeight: '100vh',

    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column-reverse',
    },
  },
}));

const Layout = props => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div style={{ flex: 1 }}>
        <Navbar />
        <Box component="main" style={{ minHeight: '80vh' }}>
          {props.children}
        </Box>
        <Footer />
      </div>
      <Sidebar />
    </div>
  );
};

export default Layout;
