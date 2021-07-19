import React from 'react';
import { makeStyles, Typography, Box, Container } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  introHeader: {
    textTransform: 'uppercase',
    letterSpacing: '.2em',
  },
  introParagraph: {
    margin: '4rem 0 2rem',
    fontSize: '1.5rem',
    lineHeight: 1.5,
  },
  introList: {
    padding: '0',
    listStyle: 'none',
    lineHeight: '2',
    fontSize: '1.5rem',
  },
  introSection: {
    minHeight: '65vh',
    display: 'flex',
    alignItems: 'center',
    marginBottom: '2rem',
  },
}));

function Introduction() {
  const classes = useStyles();

  return (
    <Box component="section" className={classes.introSection}>
      <Container>
        <Typography variant="h4" component="h1" className={classes.introHeader}>
          Diana vitanyi
        </Typography>
        <Typography
          variant="body1"
          color="textSecondary"
          className={classes.introParagraph}
        >
          Hello, my name is Diana Vitanyi. <br />I am a{' '}
          <strong>Web Developer & Designer</strong>.
        </Typography>
        <div>
          <Typography
            variant="body1"
            color="textSecondary"
            component="ul"
            className={classes.introList}
          >
            <li>UI/UX</li>
            <li>Product Design</li>
            <li>Web Design</li>
            <li>Front-end</li>
          </Typography>
        </div>
      </Container>
    </Box>
  );
}

export default Introduction;
