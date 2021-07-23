import React, { useState } from 'react';
import Layout from './../components/Layout';
import {
  Typography,
  TextField,
  Button,
  Grid,
  Container,
  makeStyles,
  List,
  SvgIcon,
} from '@material-ui/core';
import { navigate } from 'gatsby-link';
import { Link } from 'gatsby-theme-material-ui';
import GitHubIcon from '@material-ui/icons/GitHub';
import SendIcon from '@material-ui/icons/Send';
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
      .then(() => navigate('/contact'))
      .catch(error => alert(error));
  };

  return (
    <Layout>
      <Container style={{ minHeight: '78vh' }}>
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
                <Button className={classes.btn} startIcon={<GitHubIcon />}>
                  <Link
                    to="https://github.com/Isisaurus"
                    target="__blank"
                    className={classes.link}
                  >
                    github/Isisaurus
                  </Link>
                </Button>
                <Button
                  className={classes.btn}
                  startIcon={
                    <SvgIcon>
                      <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 22 22"
                      >
                        <title>linkedin-with-circle</title>
                        <path d="M10 0.4c-5.302 0-9.6 4.298-9.6 9.6s4.298 9.6 9.6 9.6 9.6-4.298 9.6-9.6-4.298-9.6-9.6-9.6zM7.65 13.979h-1.944v-6.256h1.944v6.256zM6.666 6.955c-0.614 0-1.011-0.435-1.011-0.973 0-0.549 0.409-0.971 1.036-0.971s1.011 0.422 1.023 0.971c0 0.538-0.396 0.973-1.048 0.973zM14.75 13.979h-1.944v-3.467c0-0.807-0.282-1.355-0.985-1.355-0.537 0-0.856 0.371-0.997 0.728-0.052 0.127-0.065 0.307-0.065 0.486v3.607h-1.945v-4.26c0-0.781-0.025-1.434-0.051-1.996h1.689l0.089 0.869h0.039c0.256-0.408 0.883-1.010 1.932-1.010 1.279 0 2.238 0.857 2.238 2.699v3.699z"></path>
                      </svg>
                    </SvgIcon>
                  }
                >
                  <Link
                    to="https://www.linkedin.com/in/diana-vitanyi-49211a15a/"
                    target="__blank"
                    className={classes.link}
                  >
                    linkedin/diana-vitanyi-49211a15a
                  </Link>
                </Button>

                <Button
                  className={classes.btn}
                  startIcon={<PictureAsPdfIcon />}
                >
                  <Link to="#" target="__blank" className={classes.link}>
                    CV
                  </Link>
                </Button>
              </List>
            </Container>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}

export default Contact;
