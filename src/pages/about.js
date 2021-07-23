import React from 'react';
import Layout from './../components/Layout';
import { Container, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  container: {
    margin: '4rem 0',
    [theme.breakpoints.down('sm')]: {
      margin: '2rem 0',
    },
  },
}));

const About = () => {
  const classes = useStyles();
  return (
    <Layout>
      <Container className={classes.container}>
        <Typography variant="h5">
          {' '}
          Sorry. This page is under construction.
        </Typography>
      </Container>
    </Layout>
  );
};

export default About;
