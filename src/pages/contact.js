import React, { useState, useEffect } from 'react';
import Layout from './../components/Layout';
import ContactMessage from '../components/ContactMessage';
import {
  Typography,
  TextField,
  Button,
  Grid,
  Container,
  makeStyles,
  List,
} from '@material-ui/core';
import { Link } from 'gatsby-theme-material-ui';
import GitHubIcon from '@material-ui/icons/GitHub';
import SendIcon from '@material-ui/icons/Send';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import EmailIcon from '@material-ui/icons/Email';

const useStyles = makeStyles(theme => ({
  title: {
    margin: '1em 0 .5em',
    fontSize: '1.5rem',
    [theme.breakpoints.down('sm')]: {
      marginTop: '2em',
      fontSize: '1rem',
    },
  },
  gridContainer: {
    margin: '4rem 0',
    minHeight: '60vh',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
      margin: '2rem 0',
    },
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
    '&:hover': {
      textDecoration: 'none',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.2rem',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '.8rem',
    },
  },
  btn: {
    '&:hover': {
      color: [theme.palette.primary.main],
    },
  },
}));

function Contact() {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    if (error || success) {
      setTimeout(() => {
        setError(null);
        setSuccess(null);
      }, 5000);
    }
  }, [error, success]);

  const handleChangeEmail = e => {
    setEmail(e.target.value);
    e.preventDefault();
  };
  const handleChangeMessage = e => {
    e.preventDefault();
    setMessage(e.target.value);
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
      .then(() => {
        // // clear form
        setEmail('');
        setMessage('');
        // show message
        setSuccess(
          'Your message was successfully sent! I will get back to you soon.'
        );
      })
      .catch(error => {
        setError(error);
      });
  };

  return (
    <Layout>
      <Container>
        <Grid
          container
          className={classes.gridContainer}
          alignItems="center"
          justifyContent="flex-start"
        >
          <Grid item sm={12} md={6} container>
            <Container>
              <Typography variant="h5" component="h2" className={classes.title}>
                Send me a message
              </Typography>
              <form
                data-netlify="true"
                name="contact"
                method="post"
                onSubmit={handleSubmit}
                className={classes.form}
                id="contact-form"
              >
                <input type="hidden" name="form-name" value="contact" />

                <TextField
                  name="email"
                  type="email"
                  label="Your email"
                  value={email}
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
                  value={message}
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
              <ContactMessage error={error} success={success} />
            </Container>
          </Grid>
          <Grid item sm={12} md={6} container>
            <Container>
              <List className={classes.list}>
                <Button className={classes.btn} startIcon={<EmailIcon />}>
                  <Link
                    to="mailto:dianavitanyi@gmail.com"
                    target="__blank"
                    className={classes.link}
                  >
                    dianavitanyi@gmail.com
                  </Link>
                </Button>
                <Link
                  to="https://github.com/Isisaurus"
                  target="__blank"
                  className={classes.link}
                >
                  <Button className={classes.btn} startIcon={<GitHubIcon />}>
                    github/Isisaurus
                  </Button>
                </Link>
                <Link
                  to="https://www.linkedin.com/in/diana-vitanyi-49211a15a/"
                  target="__blank"
                  className={classes.link}
                >
                  <Button className={classes.btn} startIcon={<LinkedInIcon />}>
                    linkedin/diana-vitanyi-49211a15a
                  </Button>
                </Link>

                <Link to="#" target="__blank" className={classes.link}>
                  <Button
                    className={classes.btn}
                    startIcon={<PictureAsPdfIcon />}
                  >
                    CV
                  </Button>
                </Link>
              </List>
            </Container>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}

export default Contact;
