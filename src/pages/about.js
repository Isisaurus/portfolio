import React from 'react';
import Layout from './../components/Layout';
import { Container, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: '4rem',
    [theme.breakpoints.down('sm')]: {
      marginTop: '2rem',
    },
  },
}));

const About = () => {
  const classes = useStyles();
  return (
    <Layout>
      <Container className={classes.container}>
        <Typography variant="body1">
          {' '}
          Sorry. This page is under construction.
        </Typography>
      </Container>
    </Layout>
  );
};

export default About;
