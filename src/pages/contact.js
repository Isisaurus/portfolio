import React, { useState } from 'react';
import Layout from './../components/Layout';
import {
  Typography,
  TextField,
  Button,
  Grid,
  Container,
  makeStyles,
} from '@material-ui/core';
import { navigate } from 'gatsby-link';

import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles(theme => ({
  title: {
    textTransform: 'uppercase',
    letterSpacing: '.2em',
    fontSize: '1rem',
    margin: '1em 0 .5em',
  },
  gridContainer: {
    margin: '4rem 0',
    minHeight: '60vh',
    alignItems: 'center',
  },
}));

function Contact() {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleChangeEmail = e => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  const handleChangeMessage = e => {
    e.preventDefault();
    setMessage(e.target.value);
    console.log(e.target.value);
  };
  function encode(data) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  }

  const handleSubmit = event => {
    event.preventDefault();
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': event.target.getAttribute('name'),
        email,
        message,
      }),
    })
      .then(() => navigate('/'))
      .catch(error => alert(error));
  };

  return (
    <Layout>
      <Container style={{ minHeight: '78vh' }}>
        <Grid
          container
          className={classes.gridContainer}
          alignItems="center"
          justifyContent="center"
        >
          <Grid item sm={12} md={6}>
            <Typography>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta
              mollitia placeat animi officiis reprehenderit, quia corrupti
              officia vero inventore explicabo.
            </Typography>
          </Grid>
          <Grid item sm={12} md={6}>
            <Container>
              <Typography variant="h4" component="h2" className={classes.title}>
                Send me a message
              </Typography>
              <form
                data-netlify="true"
                name="contact"
                method="post"
                onSubmit={handleSubmit}
                className={classes.form}
              >
                <input type="hidden" name="form-name" value="contact" />

                <TextField
                  name="email"
                  type="email"
                  label="Your email"
                  onChange={handleChangeEmail}
                  required
                  color="primary"
                  variant="outlined"
                  size="medium"
                  placeholder="example@email.com"
                  margin="normal"
                  fullWidth
                  className={classes.input}
                />
                <TextField
                  name="message"
                  type="text"
                  label="Your message"
                  onChange={handleChangeMessage}
                  required
                  color="primary"
                  variant="outlined"
                  size="medium"
                  multiline
                  rows={6}
                  placeholder="Your message..."
                  margin="normal"
                  fullWidth
                  className={classes.input}
                />
                <Button
                  startIcon={<SendIcon />}
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                  disableElevation
                  style={{ marginTop: '1rem' }}
                >
                  Send
                </Button>
              </form>
            </Container>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}

export default Contact;
