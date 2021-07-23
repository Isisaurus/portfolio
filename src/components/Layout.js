import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'row-reverse',

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
        <Box component="main">{props.children}</Box>
        <footer style={{ minHeight: '10vh' }}>
          <p>Copyright@2021 Diana Vitanyi</p>
        </footer>
      </div>
      <Sidebar />
    </div>
  );
};

export default Layout;
