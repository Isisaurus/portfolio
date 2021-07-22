import React, { useState } from 'react';
import Layout from './../components/Layout';
import {
  Typography,
  TextField,
  Button,
  Grid,
  Container,
} from '@material-ui/core';
import { navigate } from 'gatsby-link';

import SendIcon from '@material-ui/icons/Send';

function Contact() {
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
      <Container style={{ minHeight: '90vh' }}>
        <Typography variant="h1">Contact me</Typography>
        <Grid container>
          <Grid item sm={12} md={6}>
            <Typography>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta
              mollitia placeat animi officiis reprehenderit, quia corrupti
              officia vero inventore explicabo.
            </Typography>
          </Grid>
          <Grid item sm={12} md={6}>
            <Container>
              <form
                data-netlify="true"
                name="contact"
                method="post"
                onSubmit={handleSubmit}
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
                  fullWidth
                  placeholder="example@email.com"
                  margin="normal"
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
                  fullWidth
                  multiline
                  rows={6}
                  placeholder="Your message..."
                  margin="normal"
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
