import React from 'react';
import Navbar from './Navbar';
import { Box } from '@material-ui/core';

const Layout = props => {
  return (
    <>
      <Navbar />
      <Box component="main" className="content">
        {props.children}
      </Box>
      <footer>
        <p>Copyright@2021 Diana Vitanyi</p>
      </footer>
    </>
  );
};

export default Layout;
