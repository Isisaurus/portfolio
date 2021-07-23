import React from 'react';
import Layout from './../components/Layout';
import { Container, Typography, makeStyles, Button } from '@material-ui/core';
import { Link } from 'gatsby-theme-material-ui';

const useStyles = makeStyles(theme => ({
  title: {
    margin: '4rem 0 2rem',
  },
  container: {
    minHeight: '90vh',
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
    '&:hover': {
      textDecoration: 'none',
    },
  },
  button: {
    marginTop: '2rem',
  },
}));

const NotFound = () => {
  const classes = useStyles();
  return (
    <Layout>
      <Container className={classes.container}>
        <Typography variant="h4" component="h2" className={classes.title}>
          Sorry.
        </Typography>
        <Typography
          variant="h6"
          component="p"
          style={{ textTransform: 'none' }}
        >
          404. This page doesn't exist.
        </Typography>
        <Link to="/" className={classes.link}>
          <Button
            variant="contained"
            disableElevation
            color="primary"
            className={classes.button}
          >
            Back to Homepage
          </Button>
        </Link>
      </Container>
    </Layout>
  );
};

export default NotFound;
