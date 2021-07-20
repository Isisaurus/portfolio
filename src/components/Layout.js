import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { Box } from '@material-ui/core';

const Layout = props => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
      <div style={{ flex: 1 }}>
        <Navbar />
        <Box component="main" className="content">
          {props.children}
        </Box>
        <footer>
          <p>Copyright@2021 Diana Vitanyi</p>
        </footer>
      </div>
      <Sidebar />
    </div>
  );
};

export default Layout;
