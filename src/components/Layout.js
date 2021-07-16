import React from 'react';
import Navbar from './Navbar';
import '../styles/style.css';

const Layout = props => {
  return (
    <div className="layout">
      <Navbar />
      <main className="content">{props.children}</main>
      <footer>
        <p>Copyright@2021 Diana Vitanyi</p>
      </footer>
    </div>
  );
};

export default Layout;
