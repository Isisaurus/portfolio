import React from 'react';
import { Container, Typography, makeStyles } from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import WarningIcon from '@material-ui/icons/Warning';

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: '2rem',
    backgroundColor: 'white',
    padding: '1em 3em',
    display: 'flex',
    alignItems: 'center',
  },
}));
function ContactMessage({ error, success }) {
  const classes = useStyles();
  if (error) {
    return (
      <Container className={classes.container}>
        <WarningIcon color="error" style={{ marginRight: '.5rem' }} />
        <Typography variant="body1" color="error">
          Sorry! Something went wrong. Try again later!
        </Typography>
      </Container>
    );
  }

  if (success) {
    return (
      <Container className={classes.container}>
        <CheckCircleIcon color="primary" style={{ marginRight: '.5rem' }} />
        <Typography variant="body1" color="primary">
          {success}
        </Typography>
      </Container>
    );
  }

  return '';
}

export default ContactMessage;
